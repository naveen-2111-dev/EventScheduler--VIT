// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract EventScheduler {

    struct CreateEvent {
        address creater;
        string title;
        string subtitle;
        uint256 startdate;
        uint256 endDate;
        uint256 price;
        uint256 totalParticipants;
        string streamLink;
        address[] participants;
        uint256[] amount;
    }

    mapping (uint256 => CreateEvent) public events;
    uint256 public eventCount = 0;

    function CreateEvents(string memory _title, string memory _subtitle, uint256 _startdate, uint256 _enddate,         uint256 _price, uint256 _totparticipants, string memory _streamLink) public returns (uint256) {
        eventCount++;
        CreateEvent storage newevent = events[eventCount];
        
        newevent.creater = msg.sender;
        newevent.title = _title;
        newevent.subtitle = _subtitle;
        newevent.startdate = _startdate;
        newevent.price = _price;
        newevent.totalParticipants = _totparticipants;
        newevent.endDate = _enddate;
        newevent.streamLink = _streamLink;

        return eventCount-1;
    }

    function JoinEvent(uint256 _id) public payable {
        require(_id > 0 && _id <= eventCount, "Invalid event ID");

        uint256 eventFee = msg.value;
        
        CreateEvent storage newevent = events[_id];
        require(newevent.participants.length < newevent.totalParticipants, "Event is full. Cannot accept more       participants.");
        require(newevent.price == eventFee, "Incorrect amount sent. Please check the event fee.");

        (bool success, ) = payable(address(newevent.creater)).call{value: eventFee}("");
        require(success, "Payment failed. Make sure you have enough Ether and try again.");

        newevent.participants.push(msg.sender);
        newevent.amount.push(eventFee);
    }

    function getAmountCollected(uint256 _id) public view returns (address[] memory, uint256[] memory) {
        return(events[ _id].participants, events[ _id].amount);
    }

    function GetScheduledEvents() public view returns (CreateEvent[] memory){
        CreateEvent[] memory TotalEvents = new CreateEvent[](eventCount);
        
        for(uint i=0 ; i < eventCount ; i++) {
            CreateEvent storage EventsInTotal = events[i];

            TotalEvents[i] = EventsInTotal;
        }

        return TotalEvents;
    }
}
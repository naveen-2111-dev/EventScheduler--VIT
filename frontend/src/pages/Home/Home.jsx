import React from 'react'
import { Navbar } from '../../components/navbar/navbar';
import "./home.css";

export const Home = () => {
  const Connect = () => {
    
  }
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>

      <div className="mainContent">
        <p>
          Step into the future of social engagement with Web3 events, where
          creators shape unforgettable experiences and participants join a
          decentralized celebration. Your event, your rules, on the
          decentralized stage - empower your passion, fuel connections, and let
          the blockchain be the bridge to a new era in communal gatherings.
          Craft your narrative in this digital realm, where events aren't just
          occasions but communities coming alive. Be the architect of moments
          that echo through the blockchain, inviting collaborators to co-create
          the future of shared experiences. From pixels to experiences, Web3
          events redefine social dynamics - amplify your voice, curate
          experiences, and embark on a journey where participants become part of
          a collective masterpiece. Join the revolution, create your event, and
          let others join the chorus of a new kind of togetherness, where the
          threads of connection are woven through decentralized interactions.
          Unlock the potential of decentralized interactions and shape your own
          narrative in this brave new world of communal celebration.
        </p>
      </div>

      <div className="Linker">
        <button>Wallet</button>
      </div>

      <div className="Cards">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="Footer">
        <h3>powered by web3 devs copyRight reserved @2024</h3>
      </div>
    </div>
  );
}


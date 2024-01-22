import React from 'react'
import notfound from '../../../public/notfound.png'

const Error = () => {
  return (
    <div className="container">
      <img src={notfound} />
      <h2>OOPS!!</h2>
      <div className='message'>
        <h3>"User not signed in"</h3>
      </div>

          <div className='Login'>
              <button>Connect</button>
          </div>
    </div>
  );
}

export default Error
import {useState} from 'react';
import "./conditionals.css";

const Conditionals = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogIn = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  
  return (
    <>
        <div className={isLoggedIn ? "user" : "guest"}>
            {isLoggedIn ? (<h5 className="--p --text-center">Welcome, Timi</h5>)
            :
            (<h5 className="--p --text-center">Welcome, Guest</h5>)
            }      
        </div>
        <div className='--center-all'>
            <button className='--btn --btn-primary' onClick={toggleLogIn}>
                {isLoggedIn? "Logout" : "Login"}
            </button>
        </div>
    </>
  )
}

export default Conditionals
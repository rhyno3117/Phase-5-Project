import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function IconHandshake(props) {
  return (
    <svg
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1 12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1 5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9 4.5-4.9 7.8-10.6 9.9-16.5 19.4 13 45.8 10.3 62.1-7.5 17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM96 128H0v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128zM48 352c-8.8 0-16-7.2-16-16s-7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm496-224v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128h-96zm64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2 16-16 16 16 7.2 16 16z" />
    </svg>
  );
}

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  function handleLogout() {
    fetch("/api/logout", {
      method: 'DELETE'
    }).then(() => {
      setUser(null);
    })
    navigate('/')
    ;
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          // backgroundColor: 'red'
        }}
      >
        
        
        <div
          id="starterLogo"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '10px solid black',
            textDecoration: 'none',
            position: 'relative',
            margin: '0px',
            top: '-350px',
            backgroundColor: 'purple'
          }}
        >
          <IconHandshake style={{ fontSize: '3em', margin: '0' }} />
          <p
            style={{
              marginBottom: '0',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              fontSize: '2em',
              color: 'black',
              margin: '0',
              
            }}
          >
            StyleMate
          </p>
          <span
            className="line-left"
            style={{
              content: '',
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              width: '500%',
              height: '85px',
              background: 'black',
              marginLeft: '-750px',
            }}
          ></span>
          <span
            className="line-right"
            style={{
              content: '',
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              width: '500%',
              height: '85px',
              background: 'black',
              marginRight: '-750px',
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{
              height: '60px',
              width: '80px',
              backgroundColor: 'black',
              cursor: 'pointer',
              position: 'absolute', 
              top: '10px',
              right: '10px',
              
            }}
          >
            <svg
              height="80"
              width="80"
              viewBox="0 0 512 512"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 320h352c8.84 0 16-7.16 16-16s-7.16-16-16-16H80c-8.84 0-16 7.16-16 16s7.16 16 16 16zm0-96h352c8.84 0 16-7.16 16-16s-7.16-16-16-16H80c-8.84 0-16 7.16-16 16s7.16 16 16 16zm0-96h352c8.84 0 16-7.16 16-16s-7.16-16-16-16H80c-8.84 0-16 7.16-16 16s7.16 16 16 16z"
                stroke="purple"
                strokeWidth="20"
                strokeLinecap="square"
              />
            </svg>
            {isDropdownOpen && (
              <div className="dropdown-content">
                {location.pathname !== '/MainPage' && (
                  <Link to="/MainPage">
                    <button>Create</button>
                  </Link>
                )}
                {location.pathname !== '/MePage' && (
                  <Link to="/MePage">
                    <button>Me</button>
                  </Link>
                )}
                {location.pathname !== '/UploadCloset' && (
                  <Link to="/UploadCloset">
                    <button>Upload</button>
                  </Link>
                )}
                {location.pathname !== '/' && (
                  <Link to="/">
                    <button onClick={handleLogout}>Logout</button>
                  </Link>
                )}
              </div>
            )}
          </div>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          
        </div>
      </div>
    </>
  );
}

export default Navbar;

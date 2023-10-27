import React from 'react';
import UploadFitBigBox from './UploadFitBigBox';
import { Outlet } from 'react-router-dom';

function IconHandshake(props) {
  return (
    <svg
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1 12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1 5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9 4.5-4.9 7.8-10.6 9.9-16.5 19.4 13 45.8 10.3 62.1-7.5 17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM96 128H0v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128zM48 352c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm496-224v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128h-96zm64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" />
    </svg>
  );
}

function UploadCloset() {
  const words = ['Tops', 'Bottoms', 'Lower', 'Socks', 'Shoes', 'Accessories'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        width: '100vw',
        margin: 'auto',
        padding: 'auto',
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
          margin: '0',
          marginBottom: '20px', // Add margin at the bottom
        }}
      >
        <IconHandshake style={{ fontSize: '3em', margin: '0' }} />
        <p
          style={{
            display: 'flex',
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
            display: 'flex',
            content: '',
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            width: '500%',
            height: '85px',
            background: 'black',
            zIndex: -1,
            marginLeft: '-750px',
          }}
        ></span>
        <span
          className="line-right"
          style={{
            content: '',
            display: 'flex',
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            width: '500%',
            height: '85px',
            background: 'black',
            zIndex: -1,
            marginRight: '-750px',
          }}
        ></span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          marginTop: '10px', // Add margin at the top
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              style={{
                marginTop: '50px', // Add margin at the bottom of boxes
                padding: '20px',
                width: '100px',
                height: '0px',
                margin: '15px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                fontSize: '1em',
                color: 'black',
                border: '2px solid black',
              }}
            >
              {words[index]}
            </div>
          ))}
        </div>
      </div>
      
      <UploadFitBigBox />

      <div style={{ marginBottom: '100px' }}>
      </div>
      
    </div>
  );
}

export default UploadCloset;
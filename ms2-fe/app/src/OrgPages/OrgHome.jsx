import React from 'react';
import Logo from "./OrgImages/Background.jpg";
import Root from './Root';
const OrgHome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh', // Adjust the height as needed
      }}
    >
      <div>
      <Root />
      </div>
    </div>
  );
};

export default OrgHome;
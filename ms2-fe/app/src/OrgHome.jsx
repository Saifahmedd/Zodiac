import React from 'react';
import Logo from "./OrgImages/Background.jpeg";

const OrgHome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Logo})`, // Use the Logo variable as the background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh', // Adjust the height as needed
      }}
    >
      {/* Your content goes here */}
    </div>
  );
};

export default OrgHome;

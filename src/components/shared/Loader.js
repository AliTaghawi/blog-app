import React from "react";

import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center', 
      // paddingTop: '20px'
    }}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
};

export default Loader;

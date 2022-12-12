import React from "react";

function Header() {
  return (
    <div>
      <img src="./CalTrack.svg" alt="" className="h-16 m-4" />
      <img src="./salad.svg" alt="" className="absolute top-0 right-0 h-48 z-0" style={{zIndex:-1}}/>
    </div>
  );
}

export default Header;

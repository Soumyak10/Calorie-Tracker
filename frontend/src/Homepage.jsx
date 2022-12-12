import { useState } from "react";
import App from "./App";

function Homepage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <App />
      ) : (
        <div className="homepage">
          <img src="./homepage.svg" alt="" className="h-screen" />
          <img
            src="./CalTrack.svg"
            alt=""
            className="h-16 m-4 absolute top-0 left-0 bg"
          />
          <div className="absolute top-40 flex justify-around flex-col w-full h-1/3">
            <img src="./para2.svg" alt="" className="h-36" />
            <img src="./para1.svg" alt="" className="h-20" />
          </div>
          <button
            className="  text-white text-2xl shadow-2 absolute bottom-32 right-8 h-12 w-40 "
            style={{
              background: "#31215E",
              boxShadow: "8px 8px 3px rgba(0, 0, 0, 0.25)",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            HOP IN!
          </button>
        </div>
      )}
    </div>
  );
}

export default Homepage;

import React from "react";
import AdmSclDev2 from "../projects/AdmSclDev2.png";
import FashionDev from "../projects/FashionDev.PNG";
import PinkSoundsDev from "../projects/PinkSoundsDev.PNG";
import DesignWeb1 from "../projects/DesignWeb1.PNG";

const WebDev = () => {
  return (
    <div className="projects">
      <div className="projet itemA">
        <img src={AdmSclDev2} alt="web1" />
        <h5>Sir what the fuck</h5>
      </div>
      <div className="projet itemB">
        <img src={FashionDev} alt="web1" />
        <h5>Sir what the fuck</h5>
      </div>

      <div className="projet itemC">
        <img src={DesignWeb1} alt="web1" />
        <h5>Sir what the fuck</h5>
      </div>
      <div className="projet itemD">
        <img src={PinkSoundsDev} alt="web1" />
        <h5>Sir what the fuck</h5>
      </div>
    </div>
  );
};
export default WebDev;

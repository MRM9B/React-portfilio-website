import React, { useState } from "react";
import AdmSclDev2 from "../projects/AdmSclDev2.png";
import FashionDev from "../projects/FashionDev.PNG";
import PinkSoundsDev from "../projects/PinkSoundsDev.PNG";
import DesignWeb1 from "../projects/DesignWeb1.PNG";
import tokyoDesign from "../projects/tokyoDesign.PNG";
import FDesign from "../projects/Fdesign.PNG";
import foodDev from "../projects/foodDev.jpg";
import FsLightbox from "fslightbox-react";
const All = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/watch?v=lYuIcq4ZxIE&feature=youtu.be",
          "https://www.youtube.com/watch?v=qUudArZSmSc",
          "https://www.youtube.com/watch?v=Cy1X6pOMLso&feature=youtu.be",
          "https://www.youtube.com/watch?v=HdpFw7x4Z-Y",
          "https://www.youtube.com/watch?v=VGinx-6Gkx0",
          "https://www.youtube.com/watch?v=sdEZRdCxxdU&feature=youtu.be",
          "https://www.youtube.com/watch?v=gM5vdVAn48k"
        ]}
      />

      <div className="projects ">
        <div className="col1">
          <div
            className="projetm"
            title="Click to see project"
            onClick={() => setToggler(!toggler)}
          >
            <img className="img-mobile imgs" src={tokyoDesign} alt="web1" />
            <h5 className="text">
              Mobile Design for a food ordering app using adobe XD
            </h5>
          </div>
          <div
            className="projet item3 "
            title="Click to see project"
            onClick={() => setToggler(!toggler)}
          >
            <img className="imgs" src={FDesign} alt="web1" />
            <h5 className="text">Designer portfolio design using adobe XD</h5>
          </div>
        </div>
        <div className="col2">
        <div
          className="projet item1"
          title="Click to see project"
          onClick={() => setToggler(!toggler)}
        >
          <img className="imgs" src={AdmSclDev2} alt="web1" />
          <h5 className="text">
            School administration system using jQuery,Ajax, PHP and mysql.
          </h5>
        </div>
          <div
            className="projetm item7"
            title="Click to see project"
            onClick={() => setToggler(!toggler)}
          >
            <img className="img-mobile imgs" src={foodDev} alt="web1" />
            <h5 className="text">
              Android mobile app for food ordering using java, mysql and php
            </h5>
          </div>
         
        </div>
      
        <div className="col3">
          <div
            className="projet item2"
            title="Click to see project"
            onClick={() => setToggler(!toggler)}
          >
            <img className="imgs" src={FashionDev} alt="web1" />
            <h5 className="text">Fashion Quiz using javascript</h5>
          </div>
        
          <div
            className="projet item4"
            title="Click to see project"
            onClick={() => setToggler(!toggler)}
          >
            <img className="imgs" src={DesignWeb1} alt="web1" />
            <h5 className="text">Web developer portfolio using html and css</h5>
          </div>
          <div
            className="projet item5"
            title="Click to see project"
            onClick={() => setToggler(!toggler)}
          >
            <img className="imgs" src={PinkSoundsDev} alt="web1" />
            <h5 className="text">CLICK based sound generator using javascript</h5>
          </div>
        </div>
      
      </div>
    </>
  );
};
export default All;

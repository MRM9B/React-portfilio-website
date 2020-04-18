import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import tokyoDesign from "../projects/tokyoDesign.PNG";
const TokyoDesign = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https//www.youtube.com/watch?v=DLX62G4lc44",
          "https//www.youtube.com/watch?v=xshEZzpS4CQ"
        ]}
      />
      <div
        className="projet "
        title="Click to see project"
        onClick={() => setToggler(!toggler)}
      >
        <img className="img-mobile imgs" src={tokyoDesign} alt="web1" />
        <h5 className="text">
          Mobile Design for a food ordering app using adobe XD
        </h5>
      </div>
    </>
  );
};
export default TokyoDesign;

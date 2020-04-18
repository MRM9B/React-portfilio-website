import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import AdmSclDev2 from "../projects/AdmSclDev2.png";

const AdminScolaire = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div
      className="projet item1"
      title="Click to see project"
      onClick={() => setToggler(!toggler)}
    >
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/watch?v=DLX62G4lc44",
          "https://www.youtube.com/watch?v=xshEZzpS4CQ"
        ]}
      />

      <img className="imgs" src={AdmSclDev2} alt="web1" />
      <h5 className="text">
        School administration system using jQuery,Ajax, PHP and mysql.
      </h5>
    </div>
  );
};
export default AdminScolaire;

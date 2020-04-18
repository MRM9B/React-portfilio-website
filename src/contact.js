import React from "react";
import Gmail from "./projects/google.png";
import Fb from "./projects/facebook.png";
import T from "./projects/twitter.png";
import L from "./projects/linkedin.png";

const Contact = () => {
  return (
    <div className="ending">
      <h1 className="last">CONTACT ME</h1>
        <div className="contact">
          <div className="getintouch">
            <p className="last-last">
              Is there a project you want to bring into reality ?
            </p>
            <a href="mailto:Mariem.benzineb99@gmail.com?cc=other@domain.com">
              <input className="touch cn" type="button" value="CONTACT ME" />
            </a>
          </div>
          <div className="social-media">
          <div className="spn">
            <img className="sm" src={Gmail} alt="s4" />
            <a
              className="m"
              href="mailto:Mariem.benzineb99@gmail.com?cc=other@domain.com"
            >
              <p>Mariem.benzineb99@gmail.com</p>
            </a>
          </div>
          <div className="spn">
            <img className="sm" src={Fb} alt="s4" />
            <a className="m" href="https://www.facebook.com/mariem.ben.73345">
              <p>Mariem Benzineb</p>
            </a>
          </div>
          <div className="spn">
            <img className="sm" src={T} alt="s4" />
            <a className="m" href="https://twitter.com/DevelopsMarie">
              <p>Marie Develops</p>
            </a>
          </div>
          <div className="spn">
            <img className="sm" src={L} alt="s4" />
            <a
              className="m"
              href="https://www.linkedin.com/in/mariem-benzineb-1557b716a/"
            >
              <p>Mariem Benzineb</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

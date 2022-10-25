
import "../Css/sim.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGooglePlus,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



export default function contact() {
  return (
    <>
      <div className="cpage" id="connect">
        <div className="contact">
          <div className="other">
            <div className="info">
              <h3>Email</h3>
              <div className="icon">
                <a href="mailto:nthillai67@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    style={{ paddingRight: "14px" }}
                  />
                  nthillai67@gmail.com
                </a>
              </div>
              <h3>Connect</h3>
              <div className="social-links">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/Thillai22">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/thillai-nathan/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="form">
            <h1>Get In Touch</h1>
            <form
              method="POST"
              action="https://script.google.com/macros/s/AKfycbxNRyxjLj6nFdv4QjBmjGGFvlr4847KtWVpm84PS0uC3Akv06crJoJvTnHoTQWWa7HV/exec"
            >
              <div className="flex-rev">
                <input type="text" name="Name" id="name" autoComplete="off" />
                <label for="name">Name</label>
              </div>
              <div className="flex-rev">
                <input
                  type="email"
                  name="Email"
                  id="email"
                  autoComplete="off"
                />
                <label for="email">Email Address</label>
              </div>

              <div className="flex-rev">
                <textarea
                  name="Message"
                  id="message"
                  autoComplete="off"
                ></textarea>
                <label for="message">Email Message</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

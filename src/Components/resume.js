import "../Css/resume.css";
import { Element } from "react-scroll";
export default function resume() {
  return (
    <>
      <Element name="resume" class="resume">
        <div class="container" >
          <div class="section-title stitle">
            <h2>Resume</h2>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">About</h3>
              <div class="resume-item pb-0">
                <h4>Thillai Nathan A</h4>
                <p>
                  {/* About section */}
                </p>
                <ul>
                  <li>No.42 AIBEA Nagar, Mugappair West, Chennai-37</li>
                  <li>+91 7358650100</li>
                  <li>nthillai67@gmail.com</li>
                </ul>
              </div>
              <h3 class="resume-title">Experience</h3>
              {/* <div class="resume-item">
                <h4>Senior graphic design specialist</h4>
                <h5>2019 - Present</h5>
                <p>
                  <em>Experion, New York, NY </em>
                </p>
                <ul>
                  <li>
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.{" "}
                  </li>
                  <li>
                    Supervise the assessment of all graphic materials in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from $2,000 - $25,000
                  </li>
                </ul>
              </div> */}
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Bachelor of Computer Science and Engineering</h4>
                <h5>2020 - 2024</h5>{" "}
                <em>
                  GPA- <i> 8.76/10</i>
                </em>
                <p>
                  <em>College of Engineering,Anna University, Guindy</em>{" "}
                </p>
              </div>
              <div class="resume-item">
                <h4>Higher Secondary School</h4>
                <h5>2019 - 2020</h5>{" "}
                <em>
                  Percentage Secured- <i> 95.40%</i>
                </em>
                <p>
                  <em>Velammal Vidyalaya, Mel Aynambakkam</em>
                </p>
              </div>
              <div class="resume-item">
                <h4>Higher Secondary School</h4>
                <h5>2019 - 2020</h5>{" "}
                <em>
                  Percentage Secured- <i> 91.00%</i>
                </em>
                <p>
                  <em>Velammal Vidyalaya, Mel Aynambakkam</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
      </Element>
    </>
  );
}

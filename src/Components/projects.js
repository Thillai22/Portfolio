import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Css/projects.css";
import github from "../Image/github.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptop, faLaptopCode, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";
export default function projects() {
  const projectsData = [
    { id: 1, title: "AQRE", content: "Great" ,surl:"https://github.com/Thillai22/AQRE-client",vurl:"https://aqre.vercel.app/"},
    { id: 1, title: "Ozone", content: "Great",vurl:"",surl:"https://github.com/Logeshwaran95/Ozone" },
    { id: 1, title: "Downloader", content: "Great",surl:"https://github.com/Thillai22/Downloader" },
    { id: 1, title: "Project", content: "Great",url:"" },
  ];
  return (
    <>
      <Element name="projects" class="container projects">
        <div class="px-lg-5">
          <div class="section-title">
            <h2>Projects</h2>
          </div>
          <div class="row">
            {projectsData.map((project) => (
              <div class="col-xl-4 col-lg-4 col-md-6 mb-4">
                <div class="bg-white rounded shadow-sm hover-zoomin">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg"
                    alt=""
                    class="img-fluid card-img-top"
                  />
                  <div class="p-4">
                    <h5>
                      {" "}
                      <div class="text-dark mb-3 text-uppercase">
                        <center>{project.title}</center>
                      </div>
                    </h5>
                    <p class="small text-muted mb-0">
                      {project.content}
                    </p>
                    <div class="link d-flex align-items-center justify-content-between px-0 py-2 mt-3">
                      <div class="">
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="xl"
                          // style={{ marginBottom: "2.1px" }}
                        />
                        <a href={project.surl} class="source">Source Code</a>
                      </div>

                      <div class="">
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                          size="xl"
                          // st yle={{ marginBottom: "2.1px" }}
                        />
                        <a href={project.vurl} class="source">View Site</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </>
  );
}

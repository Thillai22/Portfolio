import '../Css/about.css';
import Photo from '../Image/img.png';

export default function about() {
    return (
      <>
        <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src={Photo} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>...</h3>
            
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 March 2003</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>thillai.vercel.app</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chennai</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.E Computer Science</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>nthillai67@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p>
              Content.
            </p>
          </div>
        </div>

      </div>
    </section>
      </>
    );
}
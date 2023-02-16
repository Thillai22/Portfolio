import React from 'react';
import { render } from 'react-dom';
import { Link, Element} from 'react-scroll'


export default function Hello() {


    return (
      <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link activeClass="active" className="test1" to="/" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
                  <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
                  <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
                  <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
                  
                </ul>
              </div>
            </div>
          </nav>

          <Element name="/" className="element" >
            test 1 waste
        </Element>

          <Element name="test2" className="element">
            test 2
        </Element>

          <Element name="test3" className="element">
            test 3
        </Element>

          <Element name="test4" className="element">
            test 4
        </Element>

          <Element name="test5" className="element">
            test 5
        </Element>

        
      </div>
    );
  
};
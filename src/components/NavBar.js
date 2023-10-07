import { Navbar,Container, Nav } from "react-bootstrap"
import { useState,useEffect } from "react";
import Logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import resume from '../assets/img/r.pdf';

export const NavBar =()=> {
    const [activeLink,setActiveLInk]=useState('home');
    const [scrolled , seScrolled] =useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY>50) {
                seScrolled(true);
            }else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);


        return() => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink= (value) => {
        setActiveLInk(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
           <a className="navbar-brand"> <img className="logos" src={Logo} alt="Logo" /></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={( )=> onUpdateActiveLink('home')}  >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}  >About</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}  >Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> console.log('connect')} >Contact</Nav.Link>
          </Nav> 
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/subin-anand-65a682240" ><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/subinanand56" ><img src={navIcon2} alt="" /></a>
            <a href="#" ><img src={navIcon3} alt="" /></a>

            </div>
           {/* <a href={resume}> <button  onClick={() => console.log('connect')}><span>Resume</span></button></a> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

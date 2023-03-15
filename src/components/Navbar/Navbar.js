import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from "../../img/logo.jpg";

function Navbar() {
  return (
    <div className='nav'>         
        <img src={logo} className="logo" />
    <nav className="navbar">
      <ul>
        <li><Link to="home" smooth={true}>Home</Link></li>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
        <li> <a href= "https://www.meetup.com/techgirlssocial" target="_blank">Events</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;





// import React, { useEffect, useState } from 'react';
// import './Navbar.css';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   return (
//     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import "./Navbar.css";
import React, {useState} from 'react'
import {Link} from "react-scroll";
import {FaBars, FaTimes} from "react-icons/fa";
const Navbar = () => {
    const [click, setClick]= useState(false);
    const handleClick= () => setClick(click?false:true);

    const[color,setColor] = useState(false);
    let lastScrollY=window.scrollY;
    const changeColor = () =>{
        if(lastScrollY<window.scrollY){
            setColor(true);
        }
        else{
            setColor(false);
        }
       lastScrollY=window.scrollY;
    };
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"header header_bg":"header"} id="Home">
        <Link to="Home" spy={true} smooth={true} duration={500}>
            <h1 className="logo">Portfolio</h1>
        </Link>
        <ul className={ click?"nav_menu active":"nav_menu"} >
            <li>
                <Link to="Home" spy={true} smooth={true} duration={500} onClick={handleClick}>Home</Link>
            </li>
            <li>
                <Link to="About" spy={true} smooth={true} duration={500} onClick={handleClick}>About</Link>
            </li>
            <li>
                <Link to="Summary" spy={true} smooth={true} duration={500} onClick={handleClick}>Summary</Link>
            </li>
            <li>
                <Link to="Footer" spy={true} smooth={true} duration={500} onClick={handleClick}>Contact Us</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click?<FaTimes size={20} style={{ color:"#fff"}}/>:<FaBars size={20} style={{ color:"#fff"}}/>}
            

        </div>

    </div>
  )
}

export default Navbar

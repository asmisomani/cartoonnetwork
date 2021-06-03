import classes from '../style/Navbar.module.css'
import NavLogo from '../img/CartoonNetwork_NavLogo_120x72.jpg'
import {FaBars} from 'react-icons/fa'


function Navbar(){

    return <div className={classes.block1}>
        <div className={classes.container}>
        <span><FaBars/></span>
        <img src={NavLogo} alt=""/>
        <ul>
            <li><a href="#home" className="active">home</a></li>
            <li><a href="#">schedule</a></li>
            <li><a href="#">where to watch</a></li>
            <li><a href="#">contests</a></li>
        </ul>
        
        </div>
        </div>
}
export default Navbar
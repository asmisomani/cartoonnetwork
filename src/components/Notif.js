import {FaRegTimesCircle} from 'react-icons/fa'
import { useState} from 'react'
import classes from '../style/Notif.module.css'
function Notif(){
    const [close,setClose]=useState(true)
const closeHandler=()=>{
    setClose(false);
}
    return (close && <div className={classes.notif}> <p>Hi there! Thanks for visiting! Please note that you may link out to other sites that we don’t control. Before you click, grab a parent (or the person in charge of you) and make sure it’s ok with them that you leave our site. They can get more details about what we stand for by checking out our <a>Privacy Policy</a> and <a>Terms of Use.</a></p><button onClick={closeHandler}><span><FaRegTimesCircle/></span></button><button onClick={closeHandler}><h6>Close</h6></button></div>)
}

export default Notif
import classes from '../style/Footer.module.css'
function Footer(){
    return <div className={classes.footer}>
        <footer>
        <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">terms of use</a></li>
            <li><a href="#">advertising standard terms</a></li>
            <li><a href="#">subscribe to channel</a></li>
        </ul>
        <h3>© 2021 Corus Entertainment Inc. All rights reserved. Corus Television.</h3>
        </footer>
    </div>
}
export default Footer
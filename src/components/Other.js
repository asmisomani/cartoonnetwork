import corus from '../img/logo-rebrand-white.png'
import dischannel from '../img/dischannel.png'
import disjunior from '../img/disjunior.png'
import distoons from '../img/distoons.png'
import disx from '../img/disx.png'
import treehouse from '../img/treehouse.png'

import classes from '../style/Other.module.css'
function Other(){
    return <div className={classes.container}>
        <h5>other corus kids website</h5><br/>
        <div className={classes.wrap}>
        <section><img src={corus} alt="" width="80px" height='20px'/></section><vr/>
        <section>
        <img src={dischannel} alt=""/>
        <img src={disjunior} alt=""/>
        <img src={distoons} alt=""/>
        <img src={disx} alt=""/>
        <img src={treehouse} alt=""/>
        </section>
        </div>
    </div>
}

export default Other
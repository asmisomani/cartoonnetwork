import classes from "../style/Show.module.css"
import { Container } from 'react-bootstrap';
import {FaCaretRight} from 'react-icons/fa'
function Show(props){

return (<div className={classes.show}>
    <div className={classes.container}>
        <h1>Featured</h1>
        <section className={classes.grid}>
{props.data.map((data)=>{return <Container className={classes.item}>
    <img src={data.img} alt="" title={data.name}/>
    <section><h3>{data.name}</h3>
    <p>{data.time}<FaCaretRight className={classes.icon}/></p>
    </section>
    </Container>})}</section>
    </div>
</div>)
}
export default Show
import classes from "../style/Home.module.css"
import Show from './Show'
function Home(props){
return <div className={classes.home} id='home'>
    <div className={classes.container}>
        <Show data={props.data}/>
    </div>
</div>
}

export default Home
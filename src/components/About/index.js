import {Component} from "react"
import { MdDelete } from "react-icons/md";

class About extends Component{
    render(){
        const {details,removeTask}=this.props
        const taskRemove=()=>{
            removeTask(details.id)
        }
        return <li>
            <p>{details.name}{details.id}
        </p>
        <button type="button" onClick={taskRemove}><MdDelete /></button></li>
    }
}

export default About
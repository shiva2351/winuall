import {Component} from "react"

class TaskItem extends Component{
    render(){
        const {details}=this.props
        return <li>
            {details.name}
        </li>
    }
}

export default TaskItem
import {Component} from "react"
import TaskItem from "../TaskItem"

class TaskList extends Component{
    state={list:[{name:"morning walk",id:1},{name:"reading",id:2}]}
    render(){
        const {list}=this.state
        return <ul>
            {list.map(each=><TaskItem key={each.id} details={each}/>)}
        </ul>
    }
}

export default TaskList
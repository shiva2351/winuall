import {Component} from "react"
import TaskItem from "../TaskItem"

class TaskList extends Component{
    state={list:[{name:"morning walk",id:1},{name:"reading",id:2}]}

    removeTask=(Id)=>{
        console.log(Id,"id")
        this.setState(each=>{
             const {list}=each 
             const rk=list.filter(each=>each.id===Id)
             console.log(rk,"rk",list)
             return [...rk]
        })
    }
    render(){
        const {list}=this.state
        return <ul>
            {list.map(each=><TaskItem removeTask={this.removeTask} key={each.id} details={each}/>)}
        </ul>

    }
}

export default TaskList
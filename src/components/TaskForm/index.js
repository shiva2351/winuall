import {Component} from "react"

class TaskForm extends Component{

    submitTask=(event)=>{
        event.preventDefault()
        console.log("task")
    }
    render(){
        return <form onSubmit={this.submitTask}>
            <label>
                Task name
            </label>
            <input type="text"/>
            <label>
                Task name
            </label>
            <button type="submit">Add</button>
            <input type="text"/>
        </form>
    }
}

export default TaskForm
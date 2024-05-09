import {Component} from "react"

class TaskForm extends Component{

    submitTask=(event)=>{
        event.preventDefault()
        console.log("task")
    }
    render(){
        return <form onSubmit={this.submitTask}>
            <label htmlFor="i1">
                Task name
            </label>
            <input id="i1" type="text"/>
            <label  htmlFor="i2">
                Task name
            </label>
            <input id="i2" type="text"/>
            <button type="submit">Add</button>
            
        </form>
    }
}

export default TaskForm
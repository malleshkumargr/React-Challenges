import React from 'react'
import InputComponent from './InputComponent'

export default class AddTask extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            tasks: [],
        }
    }

    handleSubmit = () => {
        console.log('AddTask - handleSubmit')

    }

    handleAddTask = () => {
        console.log('AddTask - handleAddTask')
       this.setState(prevState => {
           return {
            tasks: [...prevState.tasks, '']
           }
       })
        
    }

    handleChange = (e, index) => {
       console.log('AddTask - handleChange')
       switch(e.target.name) {
           case 'name': 
            this.setState({
                [e.target.name] : e.target.value
            })
           break
           case 'task': 
            const tasks = this.state.tasks
            tasks[index] = e.target.value
            this.setState({tasks})
           break
           default:
               break
       }
       
    }

    handleRemove = (buttonindex) => {
        console.log('Clicked on button ', buttonindex)
        this.setState(prevState => ({
            tasks: prevState.tasks.filter((task, index) => index !== buttonindex)
        }))
    }

    render() {
        console.log('render - AddTask', this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" /> 
                    <br />
                    { this.state.tasks.map((task, index) => {
                        return <InputComponent key={index} task={task} handleChange={this.handleChange} index={index} handleRemove={this.handleRemove}/>
                    })}
                   
                    <input type="button" value="Add Task" onClick={this.handleAddTask}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}
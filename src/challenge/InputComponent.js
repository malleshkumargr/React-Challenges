import React from 'react'

function InputComponent(props) {
    console.log('InputComponent is called')
    return (
       <div>
           <input value={props.task} onChange={(e) => {
               props.handleChange(e,props.index)
           }} name="task"/>
           <button type="button" onClick={() => {
               props.handleRemove(props.index)
           }}>Remove</button>
       </div>
        
    )
}

export default InputComponent
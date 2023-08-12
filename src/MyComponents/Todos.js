import React from 'react'
import {TodoWork} from "../MyComponents/TodoWork"


export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length===0? "No todos to display":
       props.todos.map((todo)=>{
          return ( 
          <TodoWork todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
          )
        })
       }
       
    </div>
  )
}

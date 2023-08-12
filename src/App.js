//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodos} from "./MyComponents/AddTodos";
import {About} from "./MyComponents/About";

import React, {useState, useEffect} from 'react';
//import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { BrowserRouter , Route, Routes } from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    //console.log("I Am Delete of todo", todo);
    //Deleting this way in react does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    SetTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted",todos)
    //localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo=(title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }  
    const myTodo={
      sno: sno,
      title: title,
      desc: desc,
    }
    SetTodos([...todos, myTodo]);
    console.log(myTodo);
    
  }

  const [todos, SetTodos] = useState(initTodo);
  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));  
  }, [todos])
  

  return (
    
    <>
    {/* <BrowserRouter>
      <Header title="TodoList" searchBar={false}/>  
      <Routes>     
          <Route exact path='/' render={()=>{ 
            return (
            <>  
            <AddTodos addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
            )      
          }}/> 
          
          <Route exact path="/about"  element={About} />
      </Routes>        
      <Footer/>
    </BrowserRouter>   */}

       <Header title="TodoList" searchBar={false}/>
       <AddTodos addTodo={addTodo}/>
       <Todos todos={todos} onDelete={onDelete}/>  
       <Footer/>
    </> 
  );
}

export default App;



// {
//   sno:1,
//   title:"Go to the market",
//   desc:"You need to go to the market to get this job done"
// },
// {
//   sno:2,
//   title:"Go to the mall",
//   desc:"You need to go to the market to get this job done1"
// },
// {
//   sno:3,
//   title:"Go to the garden",
//   desc:"You need to go to the market to get this job done2"
// },

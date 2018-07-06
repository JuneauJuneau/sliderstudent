import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hello(){
  let phrase = "World"
  return(
    <h1> Hello {phrase}<h1>
  )
}
function SayFullName(props){
  return (
    <div>
    <h1> My Name is {props.name}, family name - {props.surname}</h1>
    <a href={props.link}> My profile link</a>
    </div>
  )
}
ReactDOM.render(<SayFullName = "Ivan" surname="Ivanov" link/>, document.getElementById('root'));
registerServiceWorker();

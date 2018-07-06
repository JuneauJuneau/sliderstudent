import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';





class App extends Component {
  render() {
    return (
      <div className = "wrapper">
            <SayFullName = "Ivan" surname="Ivanov" link = "vk.com"/>
            <SayFullName = "Anna" surname="Pulenkova" link = "facebook.com"/>
            <SayFullName = "Anton" surname="Ivanov" link = "vc.ru"/>
      </div>

    );
  }
}

function SayFullName(props){
  return (
    <div>
    <h1> My Name is {props.name}, family name - {props.surname}</h1>
    <a href={props.link}> My profile link</a>
    </div>
  )
}

export default App;

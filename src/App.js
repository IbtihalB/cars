import React, { Component } from 'react';
import './App.css';
import Mycars from './Components/Mycars'
class App extends React.Component {
  
  state={titre:'Mon catalogue'}
  changeTitle=()=>{
   this.setState({ titre: 'new title'})
  }
  changeviaparam=(titre)=>{
    this.setState({ titre})
   }
   changeviabind=(p)=>{
    this.setState({ titre: p})
   }
   changeviainput=(e)=>{
    this.setState({ titre:e.target.value})
   }
  render()
{
  return (
    <div className="App">
     <Mycars title={this.state.titre}/>
     <button onClick={this.changeTitle}>changer titre</button>
     <button onClick={()=>this.changeviaparam('titre via param')}>changer titre par parametre</button>
     <button onClick={this.changeviabind.bind(this,'titre via bind')}>changer titre par bind</button>
     <input type="text" onChange={this.changeviainput} value={this.state.titre}/>
    </div>
  );
}}

export default App;

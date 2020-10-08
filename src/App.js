import React , { Component } from 'react';
import Resume from './component/resume';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <Route exact path="/" component={Resume}/>

        </BrowserRouter>
        
      </div>
      )
  }
}



export default App;

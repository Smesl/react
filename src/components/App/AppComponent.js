import React, {Component} from "react";
import { Route , Redirect, Routes, Switch } from "react-router-dom" 

import DataEntryForm from '../DataEntryForm/DataEntryForm'
import ListComment from '../../containers/LIstContainer/ListComment'

import '../../style/App.css';
import Header from "../Header/Header";

class App extends Component  {
  render() {
    return (
        // <React.Fragment>
         <div className="container"> 
            {/* <Routes> */}
              <Route path='/' component={Header}  /> 
              
                <Route path="/" render={ (props) => <ListComment photos={props} />} />
                <Route  path='/' component={DataEntryForm}  /> 
            
            {/* </Routes> */}
           </div> 
        // </React.Fragment>
      );
  }
}

export default App; 


import React, {Component} from "react";
import {BrowserRouter, Route , Redirect, Routes, Switch } from "react-router-dom" 

import DataEntryForm from '../DataEntryForm/DataEntryForm'
import ListComment from '../../containers/LIstContainer/ListComment'

import '../../style/App.css';
import Header from "../Header/Header";

class App extends Component  {
  render() {
    return (
        <>
          <Header/>
          <div className="container mt-3"> 
            <BrowserRouter>
                {/* <Switch> */}
                    {/* <Route path='/' component={Header}  />  */}
                    <Route path='/' component={DataEntryForm}  /> 
                    <Route path="/:id" render={ (props) => <ListComment photos={props} />} />
                {/* </Switch> */}
            </BrowserRouter>
          </div> 
        </>
      );
  }
}

export default App; 


import React, {Component} from "react";
import {BrowserRouter as Router, Route , Redirect, Routes, Switch } from "react-router-dom" 

import DataEntryForm from '../DataEntryForm/DataEntryForm'
import ListComment from '../../containers/LIstContainer/ListComment'

import '../../style/App.css';
import Header from "../Header/Header";
import ListItemDetailContainer from "../../containers/ListItemDetailContainer/ListItemDetailContainer";

class App extends Component  {
  render() {
    return (
        <>
          <Header/>
          <div className="container mt-3"> 
            <Router>
                {/* <Switch> */}
                    <Route exact path='/' component={DataEntryForm}  /> 
                    <Route exact path="/" render={ (props) => <ListComment {...props} />} />
                    <Route exact  path="/:id" render={ (props) => <ListItemDetailContainer {...props} />} />
                    <Redirect to='/' />
                {/* </Switch> */}
            </Router>
          </div> 
        </>
      );
  }
}

export default App; 


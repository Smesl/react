import React, {Component} from "react";
import {BrowserRouter as Router, Route , Redirect, Routes, Switch } from "react-router-dom" 

import DataEntryForm from '../DataEntryForm/DataEntryForm'
import ListComment from '../../containers/LIstContainer/ListComment'

import '../../style/App.css';
import Header from "../Header/Header";
import ListItemDetailContainer from "../../containers/ListItemDetailContainer/ListItemDetailContainer";
import Login from "../Login/Login";

class App extends Component  {
  render() {
    return (
        <>
          <div className="d-flex align-items-center justify-content-around bg-secondary">
            <Header/>
            
          </div>
          
          <div className="container mt-3"> 
            <Router>
                {/* <Switch>                */}
                    <Route exact path='/' component={DataEntryForm}  /> 
                    <Route exact path="/" render={ (props) => <ListComment {...props} />} />
                    <Route exact path='/login/:type?' component={Login} />
                    <Route exact  path="/comment/:id" render={ (props) => <ListItemDetailContainer {...props} />} />
                    {/* <Redirect to='/' /> */}
                {/* </Switch> */}
            </Router>
          </div> 
        </>
      );
  }
}

export default App; 


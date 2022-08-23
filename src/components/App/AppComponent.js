import React, {Component} from "react";

import DataEntryForm from '../DataEntryForm/DataEntryForm'
import ListComment from '../../containers/LIstContainer/ListComment'

import '../../style/App.css';
import Header from "../Header/Header";

class App extends Component  {
  render() {
    return (
        <React.Fragment>
          <Header/>
          <DataEntryForm/>
          <ListComment/>
        </React.Fragment>
      );
  }
}

export default App; 


import React, {Component} from "react";

import DataEntryForm from '../DataEntryForm/DataEntryForm'
import ListComment from '../../containers/LIstContainer/ListComment'

import '../../style/App.css';

class App extends Component  {
  render() {
    return (
        <React.Fragment>
          <DataEntryForm/>
          <ListComment/>
        </React.Fragment>
      );
  }
}

export default App; 


import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { Header } from "./components/header.js"
import { Table } from "./components/table.js"

class Counter extends React.Component{
  render() {
    return(
      <div>
      <Header/>
      <Table/>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));

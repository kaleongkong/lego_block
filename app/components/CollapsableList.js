import React from 'react';
import ReactDOM from 'react-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

export default class CollapsableList extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      collapse : true
    }
  }
  handleClick(){
    this.setState({collapse : !this.state.collapse})
  }
  render(){
    return(
      <div className="list-group" id="item-1">
        <a href="#item-1-1" className="list-group-item" onClick={this.handleClick}>
          <i className="glyphicon glyphicon-chevron-right"></i>Item 1.1
        </a>
        <div className={this.state.collapse ? 'list-group collapse' : 'list-group'} id='item-1-1'>
          <a href="#" className="list-group-item">Item 1.1.1</a>
          <a href="#" className="list-group-item">Item 1.1.2</a>
          <a href="#" className="list-group-item">Item 1.1.3</a>
        </div>
      </div>
    );
  }
}
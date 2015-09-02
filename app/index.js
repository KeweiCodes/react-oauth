import React from 'react';

export default class IndexComponent extends React.Component{
  render(){
    return <h1>Welcome to OAuth React!</h1>
  }
}

React.render(<IndexComponent />, document.getElementById('app'));

import React from 'react';

export default class User extends React.Component{
  render(){
    return(
      <div>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>The User Page</h1>
          </div>
        </div>
        <div className='row'>
          <div className="col-xs-12">
            <p> User Name: { this.props.userName }</p>
          </div>
        </div>
      </div>
    )
  }
}

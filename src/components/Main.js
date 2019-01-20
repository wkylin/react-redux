import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className='row'>
          <div className="col-xs-12">
            <div
              className='button'
              style={{ }}
              onClick={() => this.props.changeUserName('Anna')}
            >
              Change the userName
            </div>
          </div>
        </div>
      </div>
    )
  }
}

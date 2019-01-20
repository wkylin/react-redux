import React from 'react';

export const Main = (props) => {
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
            onClick={() => props.changeUserName('Anna')}
          >
            Change the userName
          </div>
        </div>
      </div>
    </div>
  )
}

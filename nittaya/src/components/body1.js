/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import chicken3 from '../picture/homepage/chcken3.png'
import '../css/homepage.css'
class body1 extends React.Component {
  render() {
    return (
      <div className='row1body'>
        {}
        <img src={chicken3} alt='picture' className='rowimg' />
      </div>
    )
  }
}

export default body1

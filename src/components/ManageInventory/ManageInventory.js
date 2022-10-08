import React from 'react'
import { Link } from 'react-router-dom'
import OrderReview from '../OrderReview/OrderReview'
import './ManageInventory.css';
const ManageInventory = () => {
  return (
    <div>
       <OrderReview/>
        <div className='manage-wrapper'>
            <a className='manage-link' href="/">
                <h1 className='manage-detail'>Shop With Us More !!! </h1>
            </a>
        </div>
    </div>
  )
}

export default ManageInventory
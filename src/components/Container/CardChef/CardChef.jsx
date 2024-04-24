import React from 'react'
import './CardChef.css';

function CardChef({img,name,pos}) {
  return (
    <>
    <div className="col-md-4">

      <div className="ourchef-item ">
          <div className="card-wrapper">
            <div className="card-img">
            <img src={img} className="img" alt="Chef_01" />

            </div>
          </div>
          <div className="card-header">
            <h5>{name}</h5>
            <span>{pos}</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default CardChef

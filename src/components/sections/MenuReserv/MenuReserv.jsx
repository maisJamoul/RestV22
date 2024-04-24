import React from 'react'
import './MenuReserv.css';
import { useContext} from 'react';
import { RestContext } from '../../../hooks/RestContext';
const MenuReserv = () => {
    
    const {total,meals,removeFromReserv}=useContext(RestContext);
    const handleRemove=(item)=>{
        removeFromReserv(item);
    }
  return (
    <div className="container reserv my-3">
        <h4 className="text-danger text-center">Total: {total} $</h4>
        <div className="row mx-0">  
        
            { meals.map((item)=>{return(
                <div className="col-md-4" key={item.id}>
                    <div className="ourmenu-item border border-0 rounded-2">
                    <div className="wrapper">
                    <div className="image">
                        <img src={item.img} className="img" alt="Chef_01" />
                        <div className="content p-3 text-white">
                        <h5 className=''>{item.name} </h5>
                        <p className=''>{item.desc}</p>
                        <span className="p-2">{item.price} $</span>
                        <button className="btn btn-secondary btn-sm" onClick={(e)=>handleRemove(item)}>remove</button>
                        </div>
                    </div>
                    </div>

                </div>
                </div>

            )
            })}
        </div>
    </div>
  )
}

export default MenuReserv

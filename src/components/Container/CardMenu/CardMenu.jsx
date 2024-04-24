
import './CardMenu.css';


function CardMenu({id,img,name,desc,price,children}) {



  return (
    <>
      <div className="ourmenu-item border border-0 rounded">
        <div className="wrapper">
          <div className="image">
            <img src={img} className="img" alt="Chef_01" />
            <div className="content p-3 text-white">
              <h5 className=''>{name} </h5>
              <p className=''>{desc}</p>
              <span className="p-2">Price : {price} $</span>
             {children}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CardMenu

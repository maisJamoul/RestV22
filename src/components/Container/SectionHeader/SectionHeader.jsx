import React from 'react'
import './SectionHeader';
function SectionHeader(props) {
  return (
    <>
      <h4 className="text-danger d-flex flex-row"><span className="px-2" style={{width:"50px"}}>
        <hr className="fw-bolder lh-100"/></span>{props.children} 
        </h4>
     
    </>
  )
}

export default SectionHeader

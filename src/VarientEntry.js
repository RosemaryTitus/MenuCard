import React from "react";
function VarientEntry(props)
{
  return(<>
  <div className="varient-list">
  <div className="entrylist-item">
    <span  className="varient-name">{props.name}</span><br/>
    <span className="varient-txt">{props.text}</span> 
    <span className="varient-value">{props.rate}</span>
  </div>
  </div>


  </>);
}
export default VarientEntry;
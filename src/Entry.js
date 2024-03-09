import React from "react";
function Entry(props)
{
  return(<>
  <div className="entrylist-list">
  <div className="entrylist-item">
    <span className="name">{props.name}</span>
    <span className="value">{props.rate}</span>
  </div>
  </div>


  </>);
}
export default Entry;
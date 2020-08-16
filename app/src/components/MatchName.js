import React from "react";
function MatchName(props) {
  return (
    <div style={{border: "1px"}}>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default MatchName;
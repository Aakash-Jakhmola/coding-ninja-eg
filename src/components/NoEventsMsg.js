import React from 'react' ;

export default (props) => {

  let style = {
    width : "100%",
    height : "500px"
  }

  let pStyle = {
    fontSize : "2rem",
    textAlign : "center" ,
    marginTop:"200px"
  }

  let str = " with selected tags";

  return (
    <div style={style}>
      <p style={pStyle}>No Events Found {props.tagSelected && str}</p>
    </div>
  );
}
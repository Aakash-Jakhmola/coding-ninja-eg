import React from 'react' 



export default (props) => {
  return <div className = "Tag" onClick={props.handleTagClick}>
    {props.data}
  </div>;
}
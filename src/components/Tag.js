import React from 'react' 
import './TagStyles.css'

export default (props) => {
  return <div className = "Tag" onClick={props.handleTagClick}>
    {props.data}
  </div>;
}
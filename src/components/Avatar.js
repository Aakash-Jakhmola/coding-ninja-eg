import React from 'react' ;
import './AvatarStyles.css'

export default (props) => {
  return <div className="avatar-container">
    <div className="avatar">
      <img src={props.imgurl} alt={props.name} className="img"/>
    </div>
    <p className="img-description">{props.name}</p>
  </div> ;
}
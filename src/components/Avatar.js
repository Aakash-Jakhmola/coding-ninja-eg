import React from 'react' ;
import './AvatarStyles.css'
import profile_image from '../images/profile_image.png'

export default (props) => {
  
  return <div className="avatar-container">
    <div className="avatar">
      <img src= {props.imgurl && props.imgurl.length > 0 ? props.imgurl : profile_image } title = {props.name}className="img"/>
    </div>
    
  </div> ;
}
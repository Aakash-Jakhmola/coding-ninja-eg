import React from 'react' 
import './HeadingStyles.css'
import Tabs from './Tab'
// import Tab from './Tab'

const handleClick = (e) => {
  console.log('clikced') ;
  e.target.style.borderBottom = "2px solid #FA7328";
}

export default () => {
 return <div className="heading-box">
    Random
  </div>;
}
import React from 'react' 
import './TagStyles.css'

export default (props) => {
  
  const [isActive,setIsActive] = React.useState(false)
  React.useEffect(()=>{
    let selectedTags = sessionStorage.getItem('active_tags') ;
    selectedTags = JSON.parse(selectedTags)
    if(selectedTags) {
      selectedTags.forEach(element => {
        if(props.data === element ) {
          setIsActive(true)
        }
      });
    }
  },[])

  let customStyle = {
    color: isActive?'white':'#616161' ,
    backgroundColor:isActive?'#FA7328':'#eee'
  }

  return <div style={props.notInCard && customStyle} className = "Tag" onClick={props.handleTagClick}>
    {props.data}
  </div>;
}
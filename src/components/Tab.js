import React, {useState,useEffect} from 'react'
import "./TabStyles.css"

export default function Tabs(props) {
  
  function handleOptionChange(id) {
    let newOptionsList = [...props.options]
    for(let i=0;i<newOptionsList.length; i++)
      newOptionsList[i].state = i===id;
    props.setOptions(newOptionsList) 
    props.setActiveOption(props.options[id].title);
    sessionStorage.setItem( props.storageId, id);
  }

  useEffect(()=>{
    return ()=>{
      sessionStorage.clear()
    }
  },[])

  let customStyle = {
    fontSize : props.storageId === "event_sub_category" ? "1rem" : "1.3rem" ,
  };

  return (
      <div className="tab-wrapper">
      { props.options.map((option,id)=>(
          <div className={option.state?'opt-out opt-out-active':'opt-out'} 
              onClick={()=>{handleOptionChange(id)}}>
              <div>
                {option.icon && <i className={`${option.icon}`}/>}
                <span style={customStyle}>{option.text}</span>
              </div>
          </div>
        ))
      }
      </div>
  )
}

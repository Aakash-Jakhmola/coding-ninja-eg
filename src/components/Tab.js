import React, {useState,useEffect} from 'react'
import "./TabStyles.css"

export default function Tabs(props) {
  
  function handleOptionChange(id) {
    let newOptionsList = [...props.options]
    for(let i=0;i<newOptionsList.length; i++)
      newOptionsList[i].state = i===id;
    props.setOptions(newOptionsList) 
    props.setActiveOption(props.options[id].title);
    localStorage.setItem( props.storageId, id);
  }

  useEffect(()=>{
    return ()=>{
      localStorage.clear()
    }
  },[])

  return (
      <div className="tab-wrapper">
      { props.options.map((option,id)=>(
          <div className={option.state?'opt-out opt-out-active':'opt-out'} 
              onClick={()=>{handleOptionChange(id)}}>
              <div>
                {option.icon && <i className={`${option.icon}`}/>}
                <span>{option.title}</span>
              </div>
          </div>
        ))
      }
      </div>
  )
}

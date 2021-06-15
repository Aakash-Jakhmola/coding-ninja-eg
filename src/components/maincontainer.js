import React from 'react'
import './styles.css'
import Card from './card'
import axios from 'axios'
import Tag from './Tag'
import Tabs from './Tab'

export default () => {
    
  const [activeTags, setActiveTags] = React.useState([]) ;
  const [initialState, setInitialState] = React.useState(1) ;
  const [Tags , setTags] = React.useState([]);
  const [limit, setLimit] = React.useState(0) ;
  const [text, setText] = React.useState("Show more tags") ;
  const [eventCategory , setEventCategory] = React.useState([{}]);
  const [eventSubCategory, setEventSubCategory] = React.useState([{}]) ;
  const [activeEventCategory, setActiveEventCategory] = React.useState();
  const [activeEventSubCategory , setActiveEventSubCategory] = React.useState();


  function getEventCategory() {
    let optionsList = [{icon:"far fa-calendar-alt",title:"ALL_EVENTS",state:false},
          {icon:"fas fa-desktop",title:"WEBINARS",state:false},
          {icon:"fas fa-laptop-code",title:"CODING_EVENTS",state:false},
          {icon:"fas fa-sitemap",title:"Bootcamp Events",state:false},
          {icon:"far fa-file-video",title:"Workshop",state:false}]

    let selectedOption = localStorage.getItem( 'event_category' ) || 0;
    setActiveEventCategory(optionsList[selectedOption].title) ;
    optionsList[selectedOption].state = true
    return optionsList
  }

  function getEventSubCategory() {
    let optionsList = [{title:"Upcoming",state:false},
          {title:"Recorded",state:false},
          {title:"All Time Favourite",state:false}]

    let selectedOption = localStorage.getItem( 'event_sub_category' ) || 0;
    setActiveEventSubCategory(optionsList[selectedOption].title) ;
    optionsList[selectedOption].state = true
    return optionsList
  }

 
  


  React.useEffect(() => {

    setEventCategory(getEventCategory()) ;
    setEventSubCategory(getEventSubCategory()) ;

    axios.get('https://api.codingninjas.com/api/v3/event_tags')
    .then((res)=> {
      console.log(res.data.data.tags);
      setTags(res.data.data.tags);
      setActiveTags(res.data.data.tags)
      setLimit(10);
    },
    (err)=>console.log(err)
    )
  },[])

  const handleClick = () => {
    if(limit == 10) {
      setLimit(Tags.length)
      setText("Show less tags")
    }
    else {
      setLimit(10)
      setText("Show more tags")
    }
  }

  const handleTagClick = (e) => {

    console.log(e.target.innerHTML)

    let new_ar = [];
    if(e.target.style.color != "white") {
      e.target.style.color="white";
      e.target.style.backgroundColor="#FA7328";
      if(initialState == 1) {
        setInitialState(0);
        setActiveTags([]) ;
      }
      setActiveTags((state) => [...state,e.target.innerHTML]) ;
      console.log(activeTags)
    } else {
      
      for(let i = 0 ; i < activeTags.length ; ++i) {
        if(activeTags[i] != e.target.innerHTML)
          new_ar.push(activeTags[i]) ;
      }
      
      e.target.style.color="#616161";
      e.target.style.backgroundColor="#eee";
      if(new_ar.length == 0) {
        new_ar = Tags ;
        setInitialState(1) ;
      }
      setActiveTags(new_ar);
      console.log(activeTags)
    }
    console.log(e.target.innerHTML)
  }

  return <div className='main-box'>
    <div className="tab-container">
      <div className="tab-outer"> <Tabs options={eventCategory} setActiveOption= {setActiveEventCategory} setOptions={setEventCategory} storageId="event_category"/> </div> 
      <div className="tab-inner-container">
        <div className="tab-inner"> <Tabs options={eventSubCategory} setActiveOption = {setActiveEventSubCategory} setOptions={setEventSubCategory} storageId="event_sub_category"/> </div></div>
    </div>
    <div className="content">
      
      <div className="mainbar">
        <Card list={activeTags} activeCategory = {activeEventCategory} activeSubCategory={activeEventSubCategory} />
      </div>
      <div className="sidebar">
        Tags
        <div className="TagC">
          {Tags && Tags.slice(0,limit).map((item)=><Tag data={item} handleTagClick={handleTagClick}/>)}
          <p style = {{color:"#FA7328"}} onClick={handleClick}>{text}</p>
        </div>
      </div>
    </div>
  </div>;

}
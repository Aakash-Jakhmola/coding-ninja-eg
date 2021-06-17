import React from 'react'
import './styles.css'
import axios from 'axios'
import Tabs from './Tab'
import TagWrapper from './TagWrapper'
import CardsWrapper from './CardsWrapper'
import {eventsCategory, eventsSubCategory} from './utils'

export default () => {

  const [activeTags, setActiveTags] = React.useState([]);
  const [Tags, setTags] = React.useState([]);
  const [limit, setLimit] = React.useState(0);
  const [text, setText] = React.useState("Show more tags");
  const [eventCategory, setEventCategory] = React.useState([{}]);
  const [eventSubCategory, setEventSubCategory] = React.useState([{}]);
  const [activeEventCategory, setActiveEventCategory] = React.useState();
  const [activeEventSubCategory, setActiveEventSubCategory] = React.useState();
  const [curPageNumber, setCurPageNumber] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  function getEventCategory() {
    let optionsList = eventsCategory
    let selectedOption = localStorage.getItem('event_category') || 0;
    setActiveEventCategory(optionsList[selectedOption].title);
    optionsList[selectedOption].state = true
    return optionsList
  }

  function getEventSubCategory() {
    let optionsList = eventsSubCategory
    let selectedOption = localStorage.getItem('event_sub_category') || 0;
    setActiveEventSubCategory(optionsList[selectedOption].title);
    optionsList[selectedOption].state = true
    return optionsList
  }

 

  function handlePageChange(e) {
    console.log(e.target.value);
    setCurPageNumber(parseInt(e.target.value));
  }

  function increment() {
    setCurPageNumber((prev) => prev + 1);
  }

  function decrement() {
    setCurPageNumber((prev) => prev - 1);
  }

  React.useEffect(() => {
    
    setEventCategory(getEventCategory());
    setEventSubCategory(getEventSubCategory());

    axios.get('https://api.codingninjas.com/api/v3/event_tags')
      .then((res) => {
        console.log(res.data.data.tags);
        setTags(res.data.data.tags);
        setLimit(10);
      },
        (err) => console.log(err)
      )
  }, [])

  React.useEffect(()=>{
    console.log(activeTags);
  },[activeTags])

  return (
  <div className='main-box'>
    <div className="tab-container">
      <div className="tab-outer">
        <Tabs options={eventCategory} setActiveOption={setActiveEventCategory} setOptions={setEventCategory} storageId="event_category" /> 
      </div>
      <div className="tab-inner-container">
        <div className="tab-inner"> <Tabs options={eventSubCategory} setActiveOption={setActiveEventSubCategory} setOptions={setEventSubCategory} storageId="event_sub_category" /> </div></div>
    </div>

    <div className="content">
      <div className="mainbar">
        <CardsWrapper setTotalPages={setTotalPages} offset={(curPageNumber-1)*20} list={activeTags} activeCategory={activeEventCategory} activeSubCategory={activeEventSubCategory} />
        {totalPages > 0 && <div className="page-container">
          <button className="arrow-btn" disabled={curPageNumber === 1} onClick={decrement}><i class="fas fa-angle-left"></i></button>
          {" Page "}
          <input type="text" inputmode="numeric" value={curPageNumber} onChange={handlePageChange} />
          {" of "} {totalPages} {" "}
          <button className="arrow-btn" disabled={curPageNumber === totalPages} onClick={increment}><i class="fas fa-angle-right"></i></button>
        </div> }
      </div>

      <div className="sidebar">
        Tags
        <TagWrapper Tags={Tags} limit={limit} activeTags={activeTags} text={text} setActiveTags={setActiveTags} setText={setText} setLimit={setLimit} />
      </div>
    </div>

  </div>);
}
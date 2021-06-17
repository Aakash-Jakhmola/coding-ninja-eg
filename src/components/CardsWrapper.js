import React from 'react'
import Card from './Card'
import axios from 'axios'
import NoEventsMsg from './NoEventsMsg'


export default (props) => {
  let activeTags = "";
  props.list.forEach((s) => activeTags += s + ',')
  let isArchived = false ;
  if(props.activeSubCategory === "Archived")
    isArchived = true ;
  
  
  let url = makeUrl(props.activeCategory, props.activeSubCategory, activeTags, props.offset) ;
  const [data, setData] = React.useState([]);
  

  React.useEffect(() => {
    window.scrollTo(0,0);

    axios.get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data.events);
        props.setTotalPages(res.data.data.page_count);
      }
        , (err) => console.log(err)
      )
  }, [url, activeTags])

  return (
  <div className="cardContainer">
    {data && data.map((item) => <Card isArchived = {isArchived} data={item} />)}
    {data && data.length === 0 && <NoEventsMsg tagSelected = {activeTags.length > 0}/>}
  </div>
  );
}


function makeUrl(activeCategory, activeSubCategory, activeTags, offset) {
  let url = 'https://api.codingninjas.com/api/v3/events?';
  url += 'event_category=';
  url += activeCategory + '&';
  url += 'event_sub_category=';
  url += activeSubCategory + '&';
  url += 'tag_list=';
  if (activeTags.length > 0)
    url += activeTags.slice(0, -1);
  url += '&';
  url += 'offset=';
  url += offset;
  return url ;
}
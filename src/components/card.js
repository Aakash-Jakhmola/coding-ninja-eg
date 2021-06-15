import React from 'react'
import axios from 'axios'
import Tag from './Tag'
import Avatar from './Avatar'
import date from 'date-and-time'


const MakeCard = (props) => {

  let d = new Date(0);
  d.setUTCSeconds(props.data.event_start_time);
  let date_mod = date.format(d, 'hh:mm A, DD MMM YYYY') ;
  let others = props.data.registered_users.other_users_count
  
  return <div className="Card">
    <div className="imgContainer">
      <img className="img" src={props.data.cover_picture} />
    </div>
    <div className = "container-b">
      <div className="textContainer">
        <div>
          <h2>{props.data.name}</h2>
        </div>
        <div>
          <table className="table">
            <tr>
              <th>Starts On</th>
              <th>Entry Fee</th>
              <th>Venue</th>
            </tr>
            <tr>
              <td>{date_mod}</td>
              <td>{ props.data.currency + " " + props.data.fees}</td>
              <td>{props.data.venue}</td>
            </tr>
          </table>
        </div>
        <p>{props.data.short_desc}</p>
      </div>
      <div className="TagContainer">
        {props.data.card_tags.map((item) => <Tag data={item} />)}
      </div>
    </div>
    <hr className="solid-divider"/>
    <div className="container-b">
      <div className="users-list">
        {props.data.registered_users.top_users.map((item) => <Avatar imgurl = {item.image_url} name = {item.name}/>)}
      </div>
      <div>
        {others > 0 && ("and " + others + " others registered")}
        <button className="btn">Register Now</button>
      </div>
    </div>
  </div>;
}

export default (props) => {

  let activeTags = "";
  console.log(props.list)
  props.list.forEach((s) => activeTags += s + ',')

  

  console.log(activeTags)
  let url = 'https://api.codingninjas.com/api/v3/events?';
  url += 'event_category=';
  url += props.activeCategory + '&';
  url += 'event_sub_category=';
  url +=  props.activeSubCategory  + '&';
  url += 'tag_list=';
  if (activeTags.length > 0)
    url += activeTags.slice(0, -1) ;
  url += '&';
  url += 'offset=';
  url += '0';


  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    console.log("indise");
    console.log(props.activeCategory);
    console.log(props.activeSubCategory);
    
    let new_url = "";
    for(let i = 0 ; i < url.length; ++i)  {
      if(url[i] === ' ')
        new_url += "%20";
      else
      new_url += url[i];
    }

    url = new_url;
    console.log(url);
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data.events);
      }
        , (err) => console.log(err)
      )
  }, [url, activeTags, ])

  return <div className="cardContainer">
    {data && data.map((item) => <MakeCard data={item} />)}
  </div>;
}
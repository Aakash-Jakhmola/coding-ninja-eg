import React from 'react'
import axios from 'axios'
import Tag from './Tag'
import Avatar from './Avatar'
import date from 'date-and-time'
import defCardImage from '../images/background.jpg'

const MakeCard = (props) => {

  let d = new Date(0);
  d.setUTCSeconds(props.data.event_start_time);
  let date_mod = date.format(d, 'hh:mm A, DD MMM YYYY');
  let others = props.data.registered_users.other_users_count

  d = new Date(0) ;
  d.setUTCSeconds(props.data.registration_end_time)
  let reg_end_date = date.format(d, 'hh:mm A, DD MMM YYYY');



  return <div className="Card">
    <div className="imgContainer">
      <img className="img" src={props.data.mobile_cover_picture ? props.data.mobile_cover_picture : defCardImage } />
      {!props.isArchived && <div className="img-text"><p>Registrations open till {reg_end_date}</p></div>}
    </div>
    <div className="container-b">
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
              <td>{props.data.currency + " " + props.data.fees}</td>
              <td>{props.data.venue}</td>
            </tr>
          </table>
        </div>
        <hr className="solid-divider" />
        <p style={{fontSize:"0.8rem"}}>{props.data.short_desc}</p>
      </div>
      <div className="TagContainer">
        {props.data.card_tags.slice(0,3).map((item) => <Tag data={item} />)}
        {props.data.card_tags.length > 3 && <p> + {props.data.card_tags.length - 3} more </p>}
      </div>
    </div>
    <div className="sized-box-100"></div>
    <div className="footer">
      <hr className="solid-divider" />
      <div className="container-b">
        <div className="container-c">
          <div className="users-list">
            {props.data.registered_users.top_users.map((item) => <Avatar imgurl={item.image_url} name={item.name} />)}
          </div>
          {!props.isArchived && <button className="btn">Register Now</button>}
        </div>
        <div>
          {others > 0 && <span>and <strong> {others}</strong> others registered</span>}
        </div>
      </div>
    </div>
  </div>;
}

export default (props) => {

  

  let activeTags = "";
  console.log(props.list)
  props.list.forEach((s) => activeTags += s + ',')
  let isArchived = false ;
  if(props.activeSubCategory === "Archived")
    isArchived = true ;
  

  console.log(activeTags)
  let url = 'https://api.codingninjas.com/api/v3/events?';
  url += 'event_category=';
  url += props.activeCategory + '&';
  url += 'event_sub_category=';
  url += props.activeSubCategory + '&';
  url += 'tag_list=';
  if (activeTags.length > 0)
    url += activeTags.slice(0, -1);
  url += '&';
  url += 'offset=';
  url += props.offset;


  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    window.scrollTo(0,0);
    console.log("indise");
    console.log(props.activeCategory);
    console.log(props.activeSubCategory);

    let new_url = "";
    for (let i = 0; i < url.length; ++i) {
      if (url[i] === ' ')
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
        props.setTotalPages(res.data.data.page_count);
      }
        , (err) => console.log(err)
      )
  }, [url, activeTags,])

  return <div className="cardContainer">
    {data && data.map((item) => <MakeCard isArchived = {isArchived} data={item} />)}
  </div>;
}
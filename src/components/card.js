import React from 'react'
import Tag from './Tag'
import CardFooter from './CardFooter'
import date from 'date-and-time'
import defCardImage from '../images/background.jpg'
import './CardStyles.css'

export default (props) => {
  
  let date_mod = makeDate(props.data.event_start_time);;
  let reg_end_date = makeDate(props.data.registration_end_time);
  let otherUsersCount = props.data.registered_users.other_users_count


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
    <CardFooter topUsers = {props.data.registered_users.top_users} otherUsersCount={otherUsersCount} isArchived={props.isArchived}/>
  </div>;
}

function makeDate(sec) {
  let d = new Date(0);
  d.setUTCSeconds(sec);
  return date.format(d, 'hh:mm A, DD MMM YYYY');
}
import React from 'react' 
import Avatar from './Avatar'
import './CardFooterStyles.css'

export default (props) => {
  return (
    <div className="footer">
      <hr className="solid-divider" />
      <div className="container-b">
        <div className="container-c">
          <div className="users-list">
            {props.topUsers.map((item) => <Avatar imgurl={item.image_url} name={item.name} />)}
          </div>
          {!props.isArchived && <button className="btn">Register Now</button>}
        </div>
        <div>
          {props.otherUsersCount > 0 && <span>and <strong> {props.otherUsersCount}</strong> others registered</span>}
        </div>
      </div>
    </div>
  );
}
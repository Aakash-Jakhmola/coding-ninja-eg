import React from 'react' 
import Tag from './Tag'

export default (props) => {

  const handleTagClick = (e) => {
    console.log(e.target.innerHTML)

    let new_ar = [];
    if (e.target.style.color != "white") {
      e.target.style.color = "white";
      e.target.style.backgroundColor = "#FA7328";
      props.setActiveTags((state) => [...state, e.target.innerHTML]);
     
    } else {
      for (let i = 0; i < props.activeTags ? props.activeTags.length : 0 ; ++i) {
        if (props.activeTags[i] != e.target.innerHTML)
          new_ar.push(props.activeTags[i]);
      }
      e.target.style.color = "#616161";
      e.target.style.backgroundColor = "#eee";
      props.setActiveTags(new_ar);
    }
    console.log(e.target.innerHTML)
  }

  const handleClick = () => {
    if (props.limit == 10) {
      props.setLimit(props.Tags.length)
      props.setText("Show less tags")
    }
    else {
      props.setLimit(10)
      props.setText("Show more tags")
    }
  }

  return (
    <div className="TagC">
        {props.Tags && props.Tags.slice(0, props.limit).map((item) => <Tag data={item} handleTagClick={handleTagClick} />)}
        <p style={{ color: "#FA7328" }} onClick={handleClick}>{props.text}</p>
    </div>
  );
}
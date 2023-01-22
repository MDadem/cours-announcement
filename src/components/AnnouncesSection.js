import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { resize } from "../utility";
const AnnouncesSection = ({ announces, user }) => {
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">Daily Courses</div>
      {announces?.map((item) => (
        <div className="row pb-4" key={item.id}>
          <div className="col-md-5">
            <div className="hover-blogs-img">
              <div className="blogs-img">
                <img src={item.imgUrl} alt={item.title} />
                <div></div>
              </div>
            </div>
          </div>

          <div
      className= "col-md-7">
   <div className="text-start">
     <h6 className="category catg-color">{item.category}</h6>
     <span className= "title py-2">{item.title}</span>
    <span className= "meta-info">
       <p className= "author">{item.author}</p>
       {item.timestamp.toDate().toDateString()}
    </span>
  </div>

            <div className="short-description">
              {/* Recieve and resize the descripton with the prefered length */}
              {resize(item.description, 120)}
            </div>
            <button className="btn btn-read">Read More</button>
            <div style={{ float: "right" }}>
              <FontAwesome
                name="trash"
                style={{ cursor: "pointer", margin: "15px" }}
                size="2x"
              />
              <FontAwesome
                name="edit"
                style={{ cursor: "pointer" }}
                size="2x"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncesSection;


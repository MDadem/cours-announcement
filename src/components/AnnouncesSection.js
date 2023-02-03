import React from "react";
import FontAwesomeIcon from "react-fontawesome";
import { Link } from "react-router-dom";
import { resize } from "../utility";
const AnnouncesSection = ({ announces, user, handleDelete }) => {
  const userId = user?.uid;
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">Daily Posts</div>
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

          <div className="col-md-7">
            <div className="text-start">
              <h6 className="category catg-color">{item.category}</h6>
              <span className="title py-2">{item.title}</span>
              <span className="meta-info">
                <p className="author">{item.author}</p> -&nbsp;
                {item.timestamp.toDate().toDateString()}
              </span>
            </div>

            <div className="short-description text-start">
              {/* Recieve and resize the descripton with the prefered length */}
              {resize(item.description, 30)}
            </div>
            <Link to={`/detail/${item.id}`}>
              <button className="btn btn-read">Read More</button>
            </Link>
            {/* allow only users mith matched id to delete the announce */}
            {userId && item.userId === userId && (
              <div style={{ float: "right" }}>
                <FontAwesomeIcon
                  name="trash"

                  icon="fa-thin fa-trash"
                  style={{ cursor: "pointer", margin: "15px" }}
                  size="2x"
                  onClick={() => handleDelete(item.id)}
                />
                <Link to={`/update/${item.id}`}>
                  
                  <FontAwesomeIcon
                    icon="fa-duotone fa-pen-to-square"
                    name="edit"
                    style={{ cursor: "pointer" }}
                    size="2x"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncesSection;

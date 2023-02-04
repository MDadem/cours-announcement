import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MostPopular from "../components/MostPopular";
import Tags from "../components/tags";
import { db } from "../firebase";

const Detail = ({ setActive }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); //create a use state to store the recieved Annoucement
  const [announces, setAnnouces] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getAnnoucesData = async () => {
      const annouceRef = collection(db, "blogs");
      const announces = await getDocs(annouceRef);
      setAnnouces(
        announces.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      let tag = [];
      announces.docs.map((doc)=>tags.push(...doc.get('tags')))
      let uniqueTags = [...new Set(tags)];
      setTags(uniqueTags);
    };
    getAnnoucesData();
  }, []);

  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id); //get the reference of one document
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
    setActive(null);
  };

  return (
    <div className="single">
      <div
        className="blog-title-box"
        style={{ backgroundImage: `url('${blog?.imgUrl}')` }}
      >
        <div className="overlay"></div>
        <div className="blog-title">
          <span>{blog?.timestamp.toDate().toString()}</span>
          <h2>{blog?.title}</h2>
        </div>
      </div>
      <div className="container-fluid pb-4 pt-4 padding blog-single-content">
        <div className="container padding">
          <div className="row max-0">
            <div className="col-md-8">
              <span className="meta-info text-start">
                By <p className="author">{blog?.author}</p> - &nbsp;
                {blog?.timestamp.toDate().toString()}
              </span>
              <p className="text-start text-break" >{blog?.description}</p>
            </div>
            <div className="col-md-3">
              <Tags tags={tags}/>
              <MostPopular announces={announces}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

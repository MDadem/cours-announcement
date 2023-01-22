import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import AnnouncesSection from "../components/AnnouncesSection";
import { db } from "../firebase";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [announces, setAnnounces] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
          //
          console.log(doc.data())
          //
        });
        setAnnounces(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  console.log("announces", announces)
  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding ">
        <div className="row max-0">
          <h2>Trending</h2>
          <div className="col-md-8">
          <AnnouncesSection  announces={announces}/>
          </div>
          <div className="col-md-3">
            <h2>tags</h2>
            <h2>Most Popular</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

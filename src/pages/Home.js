import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AnnouncesSection from "../components/AnnouncesSection";
import MostPopular from "../components/MostPopular";
import Spinner from "../components/spinner";
import Tags from "../components/tags";
import Trending from "../components/Trending";
import { db } from "../firebase";
const Home = ({ setActive, user }) => {
  const [loading, setLoading] = useState(true);
  const [announces, setAnnounces] = useState([]);
  const [tags, setTags] = useState([]);
  const [trendAnnounces, setTrendAnnounces] = useState([]);

  const getTrendingAnnounces = async () => {
    const annouceRef = collection(db, "blogs");
    const trendQuery = query(annouceRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendAnnounces = [];
    querySnapshot.forEach((doc) => {
      trendAnnounces.push({ id: doc.id, ...doc.data() });
    });
    setTrendAnnounces(trendAnnounces);
  };

  useEffect(() => {
    getTrendingAnnounces();
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags")); //get tags only
          list.push({ id: doc.id, ...doc.data() }); //get normal data
          //
          console.log(doc.data());
          //
        });
        //avoid the duplication of the tags
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
        setAnnounces(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
      getTrendingAnnounces();
    };
  }, [setActive]);
  if (loading) {
    //set loading status for user before displaying the web page
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete this announce ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        setLoading(false);
        toast.success("Annouce deleted succesfully ");
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log("announces", announces);
  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding ">
        <div className="row max-0">
          <Trending announces={trendAnnounces}/>
          <div className="col-md-8">
            <AnnouncesSection
              announces={announces}
              user={user}
              handleDelete={handleDelete}
            />
          </div>
          <div className="col-md-3">
            <Tags tags={tags} />
            <MostPopular announces={announces} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

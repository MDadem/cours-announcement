import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useNavigate, Navigate, useLocation } from "react-router-dom";
import Detail from "./pages/Detail";
import AddEditAnnouce from "./pages/AddEditAnnouce";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./style.scss";
import "./media-query.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Auth from "./pages/Auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import Footer from "./components/Footer";
function App() {
  const [active, setActive] = useState("Home");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };

  return (
    <div className="App" style={{background: '#FFF2F2'}}>
      <Header
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <ToastContainer />
      {/* <ToastContainer   position: "top-center"/> */}{" "}
      {/*give other position to toast pop up*/}
      <Routes>
        {/* {location.pathname !== "/auth" ? <Header /> : ""} */}
        <Route path="/" element={<Home  setActive={setActive} user={user}/>} /> 
        <Route path="/detail/:id" element={<Detail setActive={setActive} />} />
        <Route
          path="/create"
          element={
            user?.uid ? <AddEditAnnouce user={user} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/update/:id"
          element={
            user?.uid ? <AddEditAnnouce user={user} /> : <Navigate to="/" />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth setActive={setActive} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
     <Footer style={{background:'#93C6E7'}} />
    </div>
  );
}

export default App;

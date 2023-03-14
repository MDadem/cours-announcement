// import React from "react";
// import { Link } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// // import transitions from "bootstrap";
// const Header = ({ active, setActive, user, handleLogout }) => {
//   const userId = user?.uid;
//   console.log("userId", userId);
//   console.log("Display Name ", user?.displayName);
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <Link to="/" className="navbar-brand">
//           Daily Posts App
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <li className={`nav-item text-nowrap fs-5  ${active === "home" ? "active" : ""}`}>
//               <Link
//                 to="/"
//                 className="nav-link"
//                 onClick={() => setActive("/")}
//                 style={{ marginLeft: "20px" }}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className={`nav-item text-nowrap fs-5  ${active === "create" ? "active" : ""}`}>
//               <Link
//                 to="/create"
//                 className="nav-link"
//                 onClick={() => setActive("create")}
//                 style={{ marginLeft: "25px" }}
//               >
//                 Manage Posts
//               </Link>
//             </li>
//             <li className={`nav-item text-nowrap fs-5 ${active === "about" ? "active" : ""}`}>
//               <Link
//                 to="/about"
//                 className="nav-link"
//                 onClick={() => setActive("about")}
//                 style={{ marginLeft: "20px" }}
//               >
//                 About
//               </Link>
//             </li>
//           </ul>
//           <ul
//             className="navbar-nav ml-auto d-none d-lg-block"
//             style={{ marginTop: "1px", marginLeft: "800px" }}
//           >
//             {userId ? (
//               <>
//                 <li className="nav-item">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                     alt="logo"
//                     style={{
//                       width: "30px",
//                       height: "30px",
//                       borderRadius: "50%",
//                     }}
//                   />
//                 </li>
//                 <li className="nav-item text-nowrap fs-5 ">
//                   <p style={{ marginRight: "10px", color: "gold" }}>
//                     {user?.displayName}
//                   </p>
//                   <Nav.Link
//                     onClick={handleLogout}
//                     style={{ display: "block", float: "right " }}
//                   >
//                     Logout
//                   </Nav.Link>
//                 </li>
//                 {/* <li className="nav-item">
          
//                 </li> */}
//               </>
//             ) : (
//               <li className={`nav-item text-nowrap fs-5 ${active === "login" ? "active" : ""}`}>
//                 <Link
//                   to="/auth"
//                   className="nav-link"
//                   onClick={() => setActive("login")}
//                 >
//                   Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./header.css"

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  console.log("userId", userId);
  console.log("Display Name ", user?.displayName);
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <div className="container">
        <Link to="/" className="navbar-brand" style={{marginRight: "35px"}}>
          Daily Posts App
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{marginRight: "35px"}}
              as={Link}
              to="/"
              onClick={() => setActive("/")}
              className={`text-nowrap fs-5 ${active === "home" ? "active" : ""}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{marginRight: "35px"}}
              as={Link}
              to="/create"
              onClick={() => setActive("create")}
              className={`text-nowrap fs-5  ${active === "create" ? "active" : ""}`}
            >
              Manage Posts
            </Nav.Link>
            <Nav.Link
              style={{marginRight: "35px"}}
              as={Link}
              to="/about"
              onClick={() => setActive("about")}
              className={`text-nowrap fs-5 ${active === "about" ? "active" : ""}`}
            >
              About
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto justify-content-between" style={{marginRight: "35px"}}>
            {userId ? (
              <>
                <Nav.Link 
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="logo"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                </Nav.Link>
                <Nav.Link className="text-nowrap fs-5">
                  <p style={{ marginRight: "10px", color: "gold" }}>
                    {user?.displayName}
                  </p>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                as={Link}
                to="/auth"
                onClick={() => setActive("login")}
                className={`text-nowrap fs-5 ${
                  active === "login" ? "active" : ""
                }`}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;



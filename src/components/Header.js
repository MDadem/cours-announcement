import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
// import transitions from "bootstrap";
const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  console.log("userId", userId);
  console.log("Display Name ", user?.displayName);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Daily Posts App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${active === "home" ? "active" : ""}`}>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setActive("/")}
                style={{ marginLeft: "20px" }}
              >
                Home
              </Link>
            </li>
            <li className={`nav-item ${active === "create" ? "active" : ""}`}>
              <Link
                to="/create"
                className="nav-link"
                onClick={() => setActive("create")}
                style={{ marginLeft: "25px" }}
              >
                Manage Posts
              </Link>
            </li>
            <li className={`nav-item ${active === "about" ? "active" : ""}`}>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setActive("about")}
                style={{ marginLeft: "20px" }}
              >
                About
              </Link>
            </li>
          </ul>
          <ul
            className="navbar-nav ml-auto d-none d-lg-block"
            style={{ marginTop: "1px", marginLeft: "800px" }}
          >
            {userId ? (
              <>
                <li className="nav-item">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="logo"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                </li>
                <li className="nav-item">
                  <p style={{ marginRight: "10px", color: "gold" }}>
                    {user?.displayName}
                  </p>
                  <Nav.Link
                    onClick={handleLogout}
                    style={{ display: "block", float: "right " }}
                  >
                    Logout
                  </Nav.Link>
                </li>
                {/* <li className="nav-item">
          
                </li> */}
              </>
            ) : (
              <li className={`nav-item ${active === "login" ? "active" : ""}`}>
                <Link
                  to="/auth"
                  className="nav-link"
                  onClick={() => setActive("login")}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

// const Header = ({ active, setActive, user, handleLogout }) => {
//   const userId = user?.uid;
//   return (
//     <Navbar expand="lg" bg="primary" style={{borderRadius: "1em"}}>
//       <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <Nav.Link
//                 className={active === "home" ? "active" : ""}
//                 onClick={() => setActive("home")}
//               >
//                 Home
//               </Nav.Link>
//             </Link>
//             <Link to="/create" style={{ textDecoration: "none" }}>
//               <Nav.Link
//                 className={active === "create" ? "active" : ""}
//                 onClick={() => setActive("create")}
//               >
//                 Annoucement
//               </Nav.Link>
//             </Link>
//             <Link to="/about" style={{ textDecoration: "none" }}>
//               <Nav.Link
//                 className={active === "about" ? "active" : ""}
//                 onClick={() => setActive("about")}
//               >
//                 About
//               </Nav.Link>
//             </Link>
//           </Nav>
//           <Row className="ml-auto">
//             {userId ? (
//               <Col>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//                   alt="logo"
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     borderRadius: "50%",
//                     marginRight: "10px"
//                   }}
//                 />
//                 <p style={{ marginRight: "10px" }}>{user?.displayName}</p>
//                 <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//               </Col>
//             ) : (
//               <Col>
//                 <Link to="/auth" style={{ textDecoration: "none" }}>
//                   <Nav.Link
//                     className={active === "login" ? "active" : ""}
//                     onClick={() => setActive("login")}
//                   >
//                     Login
//                   </Nav.Link>
//                 </Link>
//               </Col>
//             )}
//           </Row>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

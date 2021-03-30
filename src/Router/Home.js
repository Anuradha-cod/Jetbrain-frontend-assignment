import React from "react";
import { useHistory } from "react-router";
import Form from "../components/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Home = () => {
  const history = useHistory();
  const handlePush = () => {
    history.push("/photos");
  };

  const handleComment = () => {
    history.push("/comments");
  };
  const handleAlbums = () => {
    history.push("/album");
  };
  const handlePosts = () => {
    history.push("/posts");
  };
  const handleHome = () => {
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="albums">Albums</Nav.Link>
          <Nav.Link href="posts">Posts</Nav.Link>
          <Nav.Link href="photos">Photos</Nav.Link>
          <Nav.Link href="comments">Comments</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  // return (
  //   <div>
  //     <div>
  //       <ul className="home-ul">
  //         <img
  //           className="home-img"
  //           src="https://photos.angel.co/startups/i/5450424-87baad561d228a948b25a57a01fd6fe4-medium_jpg.jpg?buster=1598682704"
  //           alt="img"
  //         />

  //         <li className="home-li" onClick={handleComment}>
  //           Comments
  //         </li>
  //         <li className="home-li" onClick={handlePosts}>
  //           Posts
  //         </li>
  //         <li className="home-li" onClick={handlePush}>
  //           Photos
  //         </li>
  //         <li className="home-li" onClick={handleAlbums}>
  //           Albums
  //         </li>
  //         <li className="home-li" onClick={handleHome}>
  //           Home
  //         </li>
  //       </ul>
  //     </div>
  //     <div className="form">{/* <Form /> */}</div>
  //   </div>
  // );
};

export default Home;

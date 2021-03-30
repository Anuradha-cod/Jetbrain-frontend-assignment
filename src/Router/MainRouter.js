import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "../components/Form";
import Album from "./Albums";
import Comments from "./Comments";
import Photos from "./Photos";
import Posts from "./Posts";

const MainRouter = () => {
  return (
    <div>
      <Router>
        <Home />
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/signup" component={Form} />
          <Route path="/albums" component={Album} />
          <Route path="/comments" component={Comments} />
          <Route path="/photos" component={Photos} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
    </div>
  );
};

export default MainRouter;

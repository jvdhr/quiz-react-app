import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import Quiz from "../components/Quiz";
import Results from "../components/Results";
import About from "../components/About";
import NotFound from "../components/NotFound";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/results" component={Results} />} />
      <Route exact path="/about" component={About} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default AppRouter;

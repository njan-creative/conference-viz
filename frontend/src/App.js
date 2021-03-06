import React from "react";
import { Route, Switch } from "react-router-dom";
import CHeader from "./components/CHeader";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Conference from "./pages/Conference";
import CFooter from "./components/CFooter";
import { Content } from "carbon-components-react/lib/components/UIShell";

function App() {
  return (
    <>
      <CHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/:conferenceID" component={Conference} />
        </Switch>
      </Content>
      <CFooter />
    </>
  );
}

export default App;

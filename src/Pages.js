import React from "react";
import { Route, Switch } from "react-router-dom";
import LayoutComponent from "./Containers/LayoutComponents/LayoutComponent";
import UncontrolledComponent from "./Containers/UncontrolledComponents/UncontrolledComponent";

const Pages = () => {
  return (
    <Switch>
      <Route path="/layout-component" component={LayoutComponent} />
      <Route path="/uncontrolled-component" component={UncontrolledComponent} />
    </Switch>
  );
};

export default Pages;

import React from "react";
import { Route, Switch } from "react-router-dom";
import LayoutComponent from "./Containers/LayoutComponents/LayoutComponent";

const Pages = () => {
  return (
    <Switch>
      <Route path="/layout-component" component={LayoutComponent} />
    </Switch>
  );
};

export default Pages;

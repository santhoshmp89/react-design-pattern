import React from "react";
import { generatePath, Route, Switch } from "react-router-dom";
import LayoutMenus from "../../Components/Menu/LayoutMenus";
import { Path } from "../../Constants";
import SplitScreen from "./Components/SplitScreen/SplitScreen";

function LayoutComponents() {
  const LeftComponent = () => <h2>Left custome text</h2>;
  const RightComponent = () => <h3>Right custome text</h3>;

  const SpltScreenComp = () => (
    <SplitScreen>
      <LeftComponent />
      <RightComponent />
    </SplitScreen>
  );

  return (
    <>
      <h2>Layout Component</h2>
      <LayoutMenus />

      <Switch>
        <Route
          path={generatePath(Path.layout, { article: "split-screen" })}
          component={SpltScreenComp}
        />
      </Switch>
    </>
  );
}

export default LayoutComponents;

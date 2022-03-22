import React from "react";
import { generatePath, Route, Switch } from "react-router-dom";
import LayoutMenus from "../../Components/Menu/LayoutMenus";
import { Path } from "../../Constants";
import ListItems, {
  profile,
  ProfileLists
} from "./Components/ListItems/ListItems";
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

  const ListItemsComponent = () => (
    <ListItems
      items={profile}
      propertyName="profiles"
      component={ProfileLists}
    />
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
        <Route
          path={generatePath(Path.layout, { article: "list-items" })}
          component={ListItemsComponent}
        />
      </Switch>
    </>
  );
}

export default LayoutComponents;

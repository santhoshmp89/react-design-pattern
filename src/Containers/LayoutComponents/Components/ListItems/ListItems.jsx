import React from "react";

export const profile = [
  {
    name: "santhosh",
    age: 33
  },
  {
    name: "shraya",
    age: 3
  }
];

const ListItems = ({ items, propertyName, component: Component }) => {
  return (
    <>
      <h3>List items</h3>
      {Component && <Component {...{ [propertyName]: items }} />}
    </>
  );
};

export const ProfileLists = (props) => {
  return props.profiles.map((profile) => {
    return (
      <div key={profile.name}>
        <p>{profile.name}</p>
        <p>{profile.age}</p>
      </div>
    );
  });
};

export default ListItems;

import React from "react";

const Link = ({ item }) => {
  const { name, link } = item;
  return (
    <li className="md:mr-16 mr-0">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;

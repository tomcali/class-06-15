import React from "react";

const ListItem = (props) => {
  // Rendering an li tag with props.children between the tags (grocery text)
  return (
    <li className="list-group-item">
      {props.children}
    </li>
  );
};

// Exporting this component as the default (only) export
export default ListItem;

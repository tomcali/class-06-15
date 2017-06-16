import React from "react";

const List = ({ data, style }) => {
  // Destructuring data and style off of props for easy access
  // mapping through our data, returning one li element for each object
  // in the data array. Inserting item.text inside the li, using item.id
  // as a unique key prop
  return (
    <ul style={style} className="list-group">
      {data.map(item => (
        <li key={item.id} className="list-group-item">
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default List;

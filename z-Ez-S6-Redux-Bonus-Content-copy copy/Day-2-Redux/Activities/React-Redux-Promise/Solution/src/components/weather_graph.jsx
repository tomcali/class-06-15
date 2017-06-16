import React from 'react';
import _ from 'lodash';


export default (props) => {

  function getAverage(data) {
    return (
      _.round((_.sum(data))/(data.length))
    )
  }

  return(
    <div>
      <div>Average: {getAverage(props.data)} {props.units}</div>
    </div>
  );
};

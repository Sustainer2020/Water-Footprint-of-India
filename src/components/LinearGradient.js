import React from 'react';
import PropTypes from 'prop-types';

const LinearGradient = (props) => {
  const { data } = props;
  const { min = 0, max = 100, fromColor, toColor } = data;

  const boxStyle = {
    width: 180,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between', // Align min and max values at the ends
  };
  
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20
  };
  return (
    <div>
      <div style={boxStyle} className="display-flex">
        <span>{data.min}</span>
        <span className="fill"></span>
        <span>{data.max}</span>
      </div>
      <div style={{ ...boxStyle, ...gradientStyle }} className="mt8"></div>
    </div>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired
};

export default LinearGradient;

import React from 'react';
import PropTypes from 'prop-types';

const Order = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <h2>Order number {props.match.params.id}</h2>
    </div>
  );
};

Order.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object,
};

export default Order;

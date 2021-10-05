import React from 'react';
import PropTypes from 'prop-types';

const Order = (props) => (

  <div>
    <h2>Order number {props.id}</h2>
  </div>
);

Order.propTypes = {
  id: PropTypes.string,
};

export default Order;

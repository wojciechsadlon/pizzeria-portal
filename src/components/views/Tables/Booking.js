import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const Booking = (props) => (
  <div className={styles.component}>
    <h2>Booking {props.match.params.id}</h2>
  </div>
);

Booking.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object,
};

export default Booking;

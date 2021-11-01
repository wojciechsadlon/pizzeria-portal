import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const Events = (props) => {
  return (
    <div className={styles.component}>
      <h2>Events {props.match.params.id}</h2>
    </div>
  );
};

Events.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object,
};

export default Events;

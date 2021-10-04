import React from 'react';
import PropTypes from 'prop-types';

class MainLayout extends React.Component {
  propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;

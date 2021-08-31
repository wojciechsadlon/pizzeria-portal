import React from 'react';

class MainLayout extends React.Component {
  render() {
    const children = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default MainLayout;

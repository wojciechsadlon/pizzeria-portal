import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PageNav from '../PageNav/PageNav';
import Container from '@mui/material/Container';

class MainLayout extends React.Component {
  propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        <AppBar>
          <Container>
            <Toolbar disableGutters>
              <PageNav />
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth='lg'>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default MainLayout;

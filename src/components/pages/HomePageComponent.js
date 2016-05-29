'use strict';

import React from 'react';

import HomeCard from '../cards/HomeCardComponent';

require('styles/pages/HomePage.sass');

class HomePageComponent extends React.Component {
  render() {
    let className = 'mdl-layout__tab-panel homepage-component mdl-grid';
    if (this.props.data.active) className += ' is-active';

    return (
      <section id={this.props.data.id} className={className}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </section>
    );
  }
}

HomePageComponent.displayName = 'PagesHomePageComponent';

// Uncomment properties you need
// HomePageComponent.propTypes = {};
// HomePageComponent.defaultProps = {};

export default HomePageComponent;

'use strict';

import React from 'react';

require('styles/nav/LayoutTabs.sass');

const yeomanImage = require('../../images/yeoman.png');

class LayoutTabsComponent extends React.Component {
  render() {

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Podcaster</span>
          </div>
          <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
            <a href="#scroll-tab-1" className="mdl-layout__tab is-active">Home</a>
            <a href="#scroll-tab-2" className="mdl-layout__tab">Trends</a>
            <a href="#scroll-tab-3" className="mdl-layout__tab">Podcasts</a>
            <a href="#scroll-tab-4" className="mdl-layout__tab">Settings</a>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Podcaster</span>
        </div>
        <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
            <div className="page-content">
              <h1>HOME</h1>
              <img src={yeomanImage} alt="Yeoman Generator" />
            </div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-2">
            <div className="page-content">
              <h1>TRENDS</h1>
              <img src={yeomanImage} alt="Yeoman Generator" />
            </div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-3">
            <div className="page-content">
              <h1>PODCASTS</h1>
              <img src={yeomanImage} alt="Yeoman Generator" />
            </div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-4">
            <div className="page-content">
              <h1>SETTINGS</h1>
              <img src={yeomanImage} alt="Yeoman Generator" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

LayoutTabsComponent.displayName = 'NavLayoutTabsComponent';

// Uncomment properties you need
// LayoutTabsComponent.propTypes = {};
// LayoutTabsComponent.defaultProps = {};

export default LayoutTabsComponent;

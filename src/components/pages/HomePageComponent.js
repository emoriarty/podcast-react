'use strict';

import React from 'react';

require('styles/pages/HomePage.sass');

class HomePageComponent extends React.Component {
  render() {
    return (
      <section className="homepage-component mdl-grid">
        <div className="demo-card-wide mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Top Five</h2>
          </div>
          <div className="mdl-card__supporting-text">

            <ul className="demo-list-action mdl-list">
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Bryan Cranston</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Aaron Paul</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Aaron Paul</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Aaron Paul</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Bob Odenkirk</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                </span>
              </li>
            </ul>

          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>
            </button>
          </div>
        </div>


        <div className="demo-card-wide mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Top Five</h2>
          </div>
          <div className="mdl-card__supporting-text">

            <ul className="demo-list-action mdl-list">
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Bryan Cranston</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Aaron Paul</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Aaron Paul</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Aaron Paul</span>
                </span>
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Bob Odenkirk</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                </span>
              </li>
            </ul>

          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

HomePageComponent.displayName = 'PagesHomePageComponent';

// Uncomment properties you need
// HomePageComponent.propTypes = {};
// HomePageComponent.defaultProps = {};

export default HomePageComponent;

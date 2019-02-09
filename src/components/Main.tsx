import * as React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './Main.styl';
const BannerImage = require('../../assets/sitemainbanner.jpg');

export interface MainProps {
}

export default class Main extends React.Component<MainProps, any> {
  public render() {
    return (
      <div className="main">
        <div className="banner">
          <img src={BannerImage} alt=""/>
        </div>
        {/* <div className="link-button">
          <a href="https://daum.net/">
            <button></button>
          </a>
        </div> */}
      </div>
    );
  }
}

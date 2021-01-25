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
        <div className="link-button">
          <a href="https://voiceearp.blob.core.windows.net/download/comportwomenoftheempire.kr/%ED%99%88%ED%94%BC_%EB%8F%99%EC%95%84%EC%8B%9C%EC%95%84%20%ED%99%94%ED%95%B4%EC%99%80%20%ED%8F%89%ED%99%94%EC%9D%98%20%EB%AA%A9%EC%86%8C%EB%A6%AC%20%EA%B8%B0%EB%B6%80%EA%B8%88%20%EB%AA%A8%EC%A7%91%EC%99%84%EB%A3%8C%20%EB%B3%B4%EA%B3%A0.hwp">
            <button>
              <div>
                기부금 모집 보고
              </div>
            </button>
          </a>
        </div>
        <div className="link-button2">
          <a href="https://voiceearp.blob.core.windows.net/download/comportwomenoftheempire.kr/%ED%99%88%ED%94%BC_%EB%8F%99%EC%95%84%EC%8B%9C%EC%95%84%20%ED%99%94%ED%95%B4%EC%99%80%20%ED%8F%89%ED%99%94%EC%9D%98%20%EB%AA%A9%EC%86%8C%EB%A6%AC%20%EA%B8%B0%EB%B6%80%EA%B8%88%20%EB%AA%A8%EC%A7%91%EC%99%84%EB%A3%8C%20%EB%B3%B4%EA%B3%A0.hwp">
            <button>
              <div>
                기부금 모집 보고
              </div>
            </button>
          </a>
        </div>
        <div className="link-court">
          <a href="https://parkyuha.org/lawsuits">
            <button></button>
          </a>
        </div>
      </div>
    );
  }
}

import * as React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./Main.styl";

const BannerImage = require("../../assets/sitemainbanner-2.png");

export interface MainProps {}

export default class Main extends React.Component<MainProps, any> {
  public render() {
    return (
      <div className="main">
        <div className="banner">
          <img src={BannerImage} alt="" />
        </div>
        {/* <div className="link-button">
          <a href="https://voiceofearp.kr/donation">
            <button>
            </button>
          </a>
        </div> */}
        {/* <div className="link-button2">
          <a href="https://voiceearp.blob.core.windows.net/download/comportwomenoftheempire.kr/%EA%B8%B0%EB%B6%80%EA%B8%88%20%EB%AA%A8%EC%A7%91%EC%99%84%EB%A3%8C%20%EB%B3%B4%EA%B3%A0.zip">
            <button>
              <div>기부금 모집 보고</div>
            </button>
          </a>
        </div> */}
        <div className="link-court">
          <a href="https://parkyuha.org/lawsuits">
            <button></button>
          </a>
        </div>
      </div>
    );
  }
}

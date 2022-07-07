// import logo from './logo.svg';

import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/CardThree";

function News() {
    return (
        <div className="mobile-view">
            <div className="fix-btn">
                <button className="btn-news">
                    post news
                </button>
            </div>
            <div className="container">
                <div className="header-content">
                    <div className="icon-back">
                        icon back
                    </div>

                    <div className="title-Page">
                        <p>
                            City News
                        </p>
                    </div>

                    <div className="header-image-bg">
                        <img src="https://picsum.photos/500" alt="header-bg" />
                    </div>
                </div>

                <div className="body-news-card">
                    <CardOne/>
                    <CardTwo/>
                    <CardThree/>
                </div>
            </div>
        </div>
    );
}

export default News;

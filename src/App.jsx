import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import sneaker_1 from "./assets/img/sneaker-1.png";
import sneaker_2 from "./assets/img/sneaker-2.png";
import sneaker_3 from "./assets/img/sneaker-3.png";
import sneaker_4 from "./assets/img/sneaker-4.png";
import sneaker_5 from "./assets/img/sneaker-5.png";
import sneaker_6 from "./assets/img/sneaker-6.png";

const App = () => {
  const bgHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
      ? header.classList.add("bg-header")
      : header.classList.remove("bg-header");
  };

  window.addEventListener("scroll", bgHeader);

  return (
    <>
      <header className="header" id="header">
        <NavBar />
      </header>
      <main className="main">
        <section className="home">
          <div className="home-container">
            <div className="home-data">
              <h3 className="home-subtitle">NEW IN</h3>

              <div className="home-titles swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <h1 className="home-title">
                      Yeezy Boost <br /> 360 V2 Clay
                    </h1>
                  </div>

                  <div className="swiper-slide">
                    <h1 className="home-title">
                      Hyperdunk X <br /> TB Urban Red
                    </h1>
                  </div>

                  <div className="swiper-slide">
                    <h1 className="home-title">
                      Air Mag <br /> 3000 X1 Future
                    </h1>
                  </div>
                </div>
              </div>
              <a href="#" className="home-button">
                Buy Now <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="home-images">
              <div className="home-swiper swiper">
                <div className="swiper-wrapper">
                  <article className="home-article swiper-slide">
                    <div className="home-card">
                      <div className="home-circle home-circle-1"></div>
                      <img
                        src={sneaker_1}
                        alt="Sneaker Image 1"
                        className="home-img-1"
                      />
                      <img
                        src={sneaker_2}
                        alt="Sneaker Image 2"
                        className="home-img-2"
                      />
                    </div>
                  </article>

                  <article className="home-article swiper-slide">
                    <div className="home-card">
                      <div className="home-circle home-circle-2"></div>
                      <img
                        src={sneaker_3}
                        alt="Sneaker Image 3"
                        className="home-img-1"
                      />
                      <img
                        src={sneaker_4}
                        alt="Sneaker Image 4"
                        className="home-img-2"
                      />
                    </div>
                  </article>

                  <article className="home-article swiper-slide">
                    <div className="home-card">
                      <div className="home-circle home-circle-3"></div>
                      <img
                        src={sneaker_5}
                        alt="Sneaker Image 3"
                        className="home-img-1"
                      />
                      <img
                        src={sneaker_6}
                        alt="Sneaker Image 6"
                        className="home-img-2"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="home-footer">
              <div className="home-controls">
                <div className="swiper-pagination"></div>
                <div className="home-navigation">
                  <div className="swiper-button-prev">
                    <i className="ri-arrow-left-line"></i>
                  </div>
                  <div className="swiper-button-next">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
              <div className="home-social">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="home-social-link"
                >
                  <i className="ri-facebook-circle-line"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="home-social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="home-social-link"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;

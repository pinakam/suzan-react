import React from "react";
import { card } from "../json/cardimg";
 import Carousel from "react-bootstrap/Carousel"
const DisplayCaroselCards = () => {
  
  return (
    <>
    <h1 className="ms-5 mt-5 mb-5">Display 3 cards in  in one Carosel item</h1>
      {/*  bootstrap  carousel  display   3 card in first slide */}
      <Carousel>
        {card.map((item) => (
          <Carousel.Item>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-block w-100 mx-5 ">
                    <div className="card" style={{height:"450px"}}>
                      <img src={item.img[0]} className="card-img-top "style={{height:"250px"}} alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-block w-100 mx-5 ">
                    <div className="card "style={{height:"450px"}}>
                      <img src={item.img[1]} className="card-img-top "style={{height:"250px"}} alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="d-block w-100 mx-5 ">
                    <div className="card "style={{height:"450px"}}>
                      <img src={item.img[2]} className="card-img-top" style={{height:"250px"}} alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Carousel.Caption>
              {/* <h3>{item.title}</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default DisplayCaroselCards;

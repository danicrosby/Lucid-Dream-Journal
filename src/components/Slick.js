import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Slick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
          <Card className="single-dream-card">
        <CardHeader>
        <center>
          <h5>{singleDream.name}</h5>
          <span className="single-date">{singleDream.date}</span>
        </center>
        </CardHeader>
        <CardBody className="add-dream-card-body">
          <h6 className="mb-2 mt-2">Overview</h6>
          <CardText className="intro">
            Hello, Dani. It looks like you had a {singleDream.dreamType} dream
            on {singleDream.date}, that made you feel {singleDream.emotion}.
            You dreamt of {singleDream.people}, the setting was {singleDream.place}.
            You remembered a few objects, more specifically a {singleDream.thing}.
            The overall abmience of this {singleDream.color} dream was {singleDream.color}.
            Does this sound accurate?
          </CardText>
          <h6 className="mb-2 mt-2">Recorded Dream Story</h6>
          <CardText>{singleDream.entry}</CardText>
          <h6 className="mb-2 mt-2">Keywords</h6>
          <CardText className="keyword-bucket">
            <span>{singleDream.dreamType}</span>
            <span>{singleDream.emotion}</span>
            <span>{singleDream.people}</span>
            <span>{singleDream.place}</span>
            <span>{singleDream.thing}</span>
            <span>{singleDream.action}</span>
            <span>{singleDream.color}</span>
          </CardText>
          </CardBody>
          </Card>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

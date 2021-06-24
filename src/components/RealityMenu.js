import React from 'react';
import { css } from '@emotion/css';
import {
  Card,
  CardTitle,
  CardBody,
  CardText
} from 'reactstrap';

const easeSlow = css`
  transition: all 450ms ease-in-out;
`;

const menuBtn = css`
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  ${easeSlow};
  &.closer {
    transform: rotate(180deg);
  }
`;

const btnLine = css`
  width: 28px;
  height: 4px;
  margin: 0 0 5px 0;
  background-color: #333;
  opacity: .4;
  ${easeSlow};
  &.closer {
    background-color: #333;  
    &:nth-child(1) {
      transform: rotate(45deg) translate(4px, 0px);
      width: 20px;
    }
    &:nth-child(2) {
      transform: translateX(-8px);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(4px, 0px);
      width: 20px;
    }
  }
`;

const menuOverlay = css`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: darkmagenta;
  height: 100vh;
  width: 50vw;
  transform: translateX(100%);
  transition: all 900ms ease-in-out;
  &.show {
    background-color: #333;
    transform: translate(0%); 
  }
  nav {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      height: 30px;
      text-decoration: none;
      color: #333;
      cursor: pointer;
      transition: all 150ms ease-in-out;
      &:hover {
        color: #333;
      } 
    }
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

class Menu extends React.Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));

  render() {
    const { isMenuOpen } = this.state;
    return (
      <React.Fragment>
        <div
          className={`${menuBtn} ${isMenuOpen ? 'closer' : null}`}
          onClick={this.toggleMenu}
        >
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />

        </div>
        <div className={`${menuOverlay} ${isMenuOpen ? 'show' : null}`}>
          <Card className="menu-card">
            <CardBody className="menu-card-body">
              <div className="top-text mb-4">
                <h5 className="mb-3">Reality Checks</h5>
                <i className="material-icons dream-type-icon"> toggle_on </i>
              </div>
              <CardTitle><h6 className="mt-3">Reality Checks</h6></CardTitle>
              <CardText className="card-text">
                Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
                to fulfill your fantasies, or to solve a problem in your waking life.
              </CardText>
              <CardTitle><h6 className="mt-4">Palm Press</h6></CardTitle>
              <CardText>
                Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
                to fulfill your fantasies, or to solve a problem in your waking life.
              </CardText>
              <CardTitle><h6 className="mt-4">Interact With Objects</h6></CardTitle>
              <CardText>
                Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
                to fulfill your fantasies, or to solve a problem in your waking life.
              </CardText>
              <CardTitle><h6 className="mt-4">Remember, Remember, Remember</h6></CardTitle>
              <CardText>
                Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
                to fulfill your fantasies, or to solve a problem in your waking life.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;

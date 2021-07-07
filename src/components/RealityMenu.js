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
  }
`;

const btnLine = css`
  width: 16px;
  height: 16px;
  border-radius: 10px;
  background-color: darkmagenta;
  opacity: .6;
  ${easeSlow};
  &.closer {
    background-color: grey;
  }
`;

const menuOverlay = css`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #333;
  height: 100vh;
  width: 49vw;
  transform: translateX(100%);
  transition: all 900ms ease-in-out;
  &.show {
    background-color: #440D44;
    transform: translateX(0%); 
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

        </div>
        <div className={`${menuOverlay} ${isMenuOpen ? 'show' : null}`}>
          <Card className="menu-card">
            <CardBody className="menu-card-body">
              <div className="top-text mb-4">
                <h5 className="mb-3">Reality Checks</h5>
                <i className="material-icons dream-type-icon mr-3"> cloud_queue </i>
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

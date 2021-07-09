/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const CalmPop = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="material-icons button" onClick={toggle}>add_circle{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Calm Yourself </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup check className="check-form">
              <Label check><Input type="checkbox" />{' '} Breathe. Slow deep breaths until blood pressure levels.</Label>
              <Label check><Input type="checkbox" />{' '} Palm Press. Ground yourself with a Palm Push. </Label>
              <Label check><Input type="checkbox" />{' '} Close Your Eyes. Be fully in the present moment.</Label>
              <Label check><Input type="checkbox" />{' '} Sigh. Be fully in the moment by letting out a sigh. </Label>
              <Label check><Input type="checkbox" />{' '} Hug. Give yourself a 10-second hug. </Label>
              <Label check><Input type="checkbox" />{' '} Stablize. Steady yourself with a five-second wall push. </Label>
              <Label check><Input type="checkbox" />{' '} Shake It Off. Release stress, free yourself from fear. </Label>
              <Label check><Input type="checkbox" />{' '} Aromatherapy. Use lavender scented candle or oil as seditive. </Label>
              <Label check><Input type="checkbox" />{' '} Music. Can express what is difficult to articulate.</Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <span><a href="https://open.spotify.com/track/1pWo4khJ3LRaiY6puo4tmU?si=4771091ef8d54aa3" target="_blank" rel="noopener noreferrer">
            <Button className="material-icons button">headphones</Button></a></span>
          <Button className="material-icons submit-btn" onClick={toggle}>done</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CalmPop;

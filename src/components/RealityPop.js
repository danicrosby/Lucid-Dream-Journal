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

const RealityPop = (props) => {
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
        <ModalHeader toggle={toggle}>Is This Really Happening?</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup check className="check-form">
              <Label check><Input type="checkbox" />{' '} Does your reflection looks normal? </Label>
              <Label check><Input type="checkbox" />{' '} Can you push hand through a solid surface? </Label>
              <Label check><Input type="checkbox" />{' '} Do your hands and feet look normal? </Label>
              <Label check><Input type="checkbox" />{' '} Can you hold your nose and mouth shut and breathe? </Label>
              <Label check><Input type="checkbox" />{' '} Can you will yourself to fly or hover above the ground? </Label>
              <Label check><Input type="checkbox" />{' '} Can you read a sentence twice without it changing? </Label>
              <Label check><Input type="checkbox" />{' '} Can you read a clock face or digital watch? </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="material-icons submit-btn" onClick={toggle}>done</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RealityPop;

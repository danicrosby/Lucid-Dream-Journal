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
      <Button className="material-icons button" onClick={toggle}>info{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Are You Dreaming?</ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup check className="check-form">
            <Label check><Input type="checkbox" />{' '} Mirrors. Check your reflection to see if it looks normal.</Label>
            <Label check><Input type="checkbox" />{' '} Solid objects. Push your hand against a wall or table and see if it goes through.</Label>
            <Label check><Input type="checkbox" />{' '} Hands. Look at your hands. Do they look normal? </Label>
            <Label check><Input type="checkbox" />{' '} Breathing. If you can still breathe, you’re dreaming. </Label>
          </FormGroup>
        </Form>        </ModalBody>
        <ModalFooter>
          <Button className="material-icons submit-btn" onClick={toggle}>done</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RealityPop;

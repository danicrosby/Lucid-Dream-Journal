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
      <Button className="material-icons" color="transparent" onClick={toggle}>info{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup check className="check-form">
            <Label check><Input type="checkbox" />{' '} Check me out </Label>
            <Label check><Input type="checkbox" />{' '} Check me out </Label>
            <Label check><Input type="checkbox" />{' '} Check me out </Label>
            <Label check><Input type="checkbox" />{' '} Check me out </Label>
          </FormGroup>
        </Form>        </ModalBody>
        <ModalFooter>
          <Button className="material-icons submit-btn" onClick={toggle}>done</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CalmPop;

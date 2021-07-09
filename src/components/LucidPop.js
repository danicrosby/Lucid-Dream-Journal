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

const LucidPop = (props) => {
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
        <ModalHeader toggle={toggle}>Lucid Dream Checklist</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup check className="check-form">
              <Label check><Input type="checkbox" />{' '} Make your bedroom hospitable. </Label>
              <Label check><Input type="checkbox" />{' '} Keep a dream journal the try to go back to sleep.</Label>
              <Label check><Input type="checkbox" />{' '} Take note of your dream signs. </Label>
              <Label check><Input type="checkbox" />{' '} Perform reality checks. </Label>
              <Label check><Input type="checkbox" />{' '} Repeat the same phrase to yourself. </Label>
              <Label check><Input type="checkbox" />{' '} Induce sleep paralysis. </Label>
              <Label check><Input type="checkbox" />{' '} Schedule alarms to wake up during REM sleep </Label>
              <Label check><Input type="checkbox" />{' '} Play video games to boost your dream recall. </Label>
              <Label check><Input type="checkbox" />{' '} Try to convince yourself you are still in the dream. </Label>
            </FormGroup>
          </Form>        </ModalBody>
        <ModalFooter>
          <Button className="material-icons submit-btn" onClick={toggle}>done</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LucidPop;

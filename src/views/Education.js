import React from 'react';
import {
  Card,
  CardBody,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import RealityMenu from '../components/RealityMenu';
import CalmMenu from '../components/CalmMenu';
import LucidMenu from '../components/LucidMenu';

function Education() {
  return (
    <div className="education-sub-container">
      <div className="education-card-container">
        <div className="ed">
        <Card className="education-card">
          <CardBody className="education-card-body">
            <div className="sub-top-text">
              <h6 className="sub-card-title">Reality Checks</h6>
              <RealityMenu />
            </div>
            <form>
              <FormGroup className="check-form" check>
                <Label check><Input type="checkbox" />{' '}Am I dreaming?</Label>
                <Label check><Input type="checkbox" />{' '}Is time standing still?</Label>
                <Label check><Input type="checkbox" />{' '}Is there anything odd about your environment?</Label>
                <Label check><Input type="checkbox" />{' '}Are you in a state of confusion?</Label>
              </FormGroup>
            </form>
          </CardBody>
        </Card>

        <Card className="education-card">
          <CardBody className="education-card-body">
            <div className="sub-top-text">
              <h6>Lucid Dream Techniques</h6>
              <LucidMenu />
            </div>
            <form>
              <FormGroup className="check-form" check>
                <Label check><Input type="checkbox" />{' '}Look at hands and feet</Label>
                <Label check><Input type="checkbox" />{' '}Push finger through palm</Label>
                <Label check><Input type="checkbox" />{' '}Is there anything odd about your environment?</Label>
                <Label check><Input type="checkbox" />{' '}Wake back to bed alarm?</Label>
              </FormGroup>
            </form>
          </CardBody>
        </Card>

        <Card className="education-card">
          <CardBody className="education-card-body">
            <div className="sub-top-text">
              <h6>Calming Sounds</h6>
              <CalmMenu />
            </div>
            <form>
              <FormGroup className="check-form" check>
                <Label check><Input type="checkbox" />{' '}Stress Relief Count Down</Label>
                <Label check><Input type="checkbox" />{' '}Daily Meditation</Label>
                <Label check><Input type="checkbox" />{' '}The Acid (Tumbling Lights)</Label>
                <Label check><Input type="checkbox" />{' '}White Noise</Label>
              </FormGroup>
            </form>
          </CardBody>
        </Card>
        </div>
      </div>
    </div>
  );
}

export default Education;

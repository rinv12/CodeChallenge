import React, { Component } from "react";
//import {connect} from 'react-redux';
import { submitInfo } from "./actions";
import { Form, Button } from "react-bootstrap";
import data from "./data";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.updateInfo = this.updateInfo.bind(this);
    this.addInfo = this.addInfo.bind(this);
    this.state = {
      details: {
        name: "",
        animal: "",
        age: ""
      }
    };
  }

  updateInfo(event) {
    let updateInfo = Object.assign({}, this.state.details);

    updateInfo[event.target.id] = event.target.value;
    this.setState({
      details: updateInfo
    });
  }

  addInfo() {
    const { dispatch } = this.props;
    dispatch(submitInfo(this.state.details));
    data.push = [
      {
        name: this.state.details.name,
        animal: this.state.details.animal,
        age: this.state.details.age * 1
      }
    ];
  }

  render() {
    return (
      <Form className="form-horizontal">
        <Form.Group controlId="name">
          <Form.Label>
            <h2>Name: </h2>
          </Form.Label>
          <Form.Control
            onChange={this.updateInfo}
            value={this.state.details.name}
            type="text"
            placeholder="ex: Misa"
          />
        </Form.Group>

        <Form.Group controlId="animal">
          <Form.Label>
            <h3>Animal: </h3>
          </Form.Label>
          <Form.Control
            onChange={this.updateInfo}
            value={this.state.details.animal}
            type="text"
            placeholder="ex: Panda"
          />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>
            <p>Age: </p>
          </Form.Label>
          <Form.Control
            onChange={this.updateInfo}
            value={this.state.details.age}
            type="text"
            placeholder="ex: 29"
          />
        </Form.Group>

        <Button onClick={this.register}>Add Info</Button>
      </Form>
    );
  }
}

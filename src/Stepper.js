import React, { Component } from "react";
import "./Stepper.css";
export default class Stepper extends Component {
  state = {
    firstName: "",
    midlleName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    degree: "",
    specialisation: "",
    university: "",
    orderId: "",
    shippingType: "",
    shippingCompany: "",
    //
    activeStep: 0,
    stepsNumber: 4,
  };
  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepOne handleChange={this.handleChange} state={this.state} />;
      case 1:
        return <StepTwo handleChange={this.handleChange} state={this.state} />;
      case 2:
        return (
          <StepThree handleChange={this.handleChange} state={this.state} />
        );
      case 3:
        return <StepFour handleChange={this.handleChange} state={this.state} />;
      default:
        return "Unknown step";
    }
  };
  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };
  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };
  handleFinish = () => {
    const form = {
      firstName: this.state.firstName,
      midlleName: this.state.midlleName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      degree: this.state.degree,
      specialisation: this.state.specialisation,
      university: this.state.university,
      orderId: this.state.orderId,
      shippingType: this.state.shippingType,
      shippingCompany: this.state.shippingCompany,
    };
    console.log(form);
  };
  render() {
    return (
      <div className="center">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Stepper Example</h3>
          </div>
          <div className="card-body">
            {this.getStepContent(this.state.activeStep)}
          </div>

          <div className="card-footer">
            {this.state.activeStep !== 0 ? (
              <button className="btn btn-primary " onClick={this.handleBack}>
                Back
              </button>
            ) : (
              ""
            )}
            {this.state.activeStep + 1 === this.state.stepsNumber ? (
              <button
                className="btn btn-primary float-right"
                onClick={this.handleFinish}
              >
                Finish
              </button>
            ) : (
              <button
                className="btn btn-primary float-right"
                onClick={this.handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function StepOne(props) {
  return (
    <div>
      <h2>Step One</h2>
      <div className="form-group">
        <label>First Name</label>
        <input
          value={props.state.firstName}
          className="form-control"
          placeholder="First Name"
          onChange={props.handleChange("firstName")}
        />
      </div>
      <div className="form-group">
        <label>Middle Name </label>
        <input
          value={props.state.midlleName}
          className="form-control"
          placeholder="Middle Name"
          onChange={props.handleChange("midlleName")}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          value={props.state.lastName}
          className="form-control"
          placeholder="Last Name"
          onChange={props.handleChange("lastName")}
        />
      </div>
    </div>
  );
}
function StepTwo(props) {
  return (
    <div>
      <h2>Step Two</h2>

      <div className="form-group">
        <label>Address</label>
        <input
          value={props.state.address}
          className="form-control"
          placeholder="Address"
          onChange={props.handleChange("address")}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          value={props.state.city}
          className="form-control"
          placeholder="City"
          onChange={props.handleChange("city")}
        />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input
          value={props.state.country}
          className="form-control"
          placeholder="Country"
          onChange={props.handleChange("country")}
        />
      </div>
    </div>
  );
}
function StepThree(props) {
  return (
    <div>
      <h2>Step Three</h2>
      <div className="form-group">
        <label>Degree</label>
        <input
          value={props.state.degree}
          className="form-control"
          placeholder="Degree"
          onChange={props.handleChange("degree")}
        />
      </div>
      <div className="form-group">
        <label>Specialisation</label>
        <input
          value={props.state.specialisation}
          className="form-control"
          placeholder="Specialisation"
          onChange={props.handleChange("specialisation")}
        />
      </div>
      <div className="form-group">
        <label>University</label>
        <input
          value={props.state.university}
          className="form-control"
          placeholder="University"
          onChange={props.handleChange("university")}
        />
      </div>
    </div>
  );
}
function StepFour(props) {
  return (
    <div>
      <h2>Step Four</h2>

      <div className="form-group">
        <label>Order ID</label>
        <input
          value={props.state.orderId}
          className="form-control"
          placeholder="Order ID"
          onChange={props.handleChange("orderId")}
        />
      </div>
      <div className="form-group">
        <label>Shipping Type</label>
        <input
          value={props.state.shippingType}
          className="form-control"
          placeholder="Shipping Type"
          onChange={props.handleChange("shippingType")}
        />
      </div>
      <div className="form-group">
        <label>Shipping Company</label>
        <input
          value={props.state.shippingCompany}
          className="form-control"
          placeholder="Shipping Company"
          onChange={props.handleChange("shippingCompany")}
        />
      </div>
    </div>
  );
}

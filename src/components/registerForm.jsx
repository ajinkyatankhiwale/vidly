import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  onSubmit = () => {
    //Server Call
    console.log("Registered");
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        <button
          className="btn btn-primary"
          disabled={this.validate() || undefined}
        >
          Login
        </button>
      </form>
    );
  }
}

export default RegisterForm;

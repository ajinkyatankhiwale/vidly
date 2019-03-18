import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginFrom extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  onSubmit = () => {
    //Server Call
    console.log("Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}

export default LoginFrom;

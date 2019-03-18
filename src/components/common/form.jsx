import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;
    const errors = {};
    for (let err of error.details) {
      errors[err.path[0]] = err.message;
    }
    return errors;
  };

  validateElement = ({ name, value }) => {
    const element = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(element, schema);
    return error ? error.details[0].message : null;
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.onSubmit();
  };

  handleChangeEvent = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateElement(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChangeEvent}
        error={errors[name]}
      />
    );
  };
}

export default Form;

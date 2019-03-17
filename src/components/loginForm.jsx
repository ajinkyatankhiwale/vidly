import React, { Component } from "react";
import Input from "./common/input";

class LoginFrom extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
  };

  handleChangeEvent = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <form onSubmit={this.handleOnSubmit}>
        <Input
          name="username"
          label="Username"
          value={account.username}
          onChange={this.handleChangeEvent}
        />
        <Input
          name="password"
          label="Password"
          value={account.password}
          onChange={this.handleChangeEvent}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}

export default LoginFrom;

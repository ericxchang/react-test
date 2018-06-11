/* 
  @flow
*/
import React from "react";
import Message from "../Message";
type Props = {
  name: string,
  className: string
};
type State = {
  value: string,
  error?: ?string
};
export default class Welcome extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.name
    };
  }

  componentDidMount() {
    this.setState({
      error: this.validateForm()
    });
  }

  //public field same as defined in constructor this.
  handleChange = (event: any) => {
    this.setState({
      value: event.target.form.elements.username.value,
      error: this.validateForm()
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({
      target: event.target
    });

    alert(
      `A name was submitted: ${this.inputNode ? this.inputNode.value : ""}`
    );
  };

  validateForm(): string {
    if (this.inputNode && !this.inputNode.value) {
      return "username can't be blank";
    }

    return "";
  }

  inputNode: ?HTMLInputElement;
  render() {
    const { value, error } = this.state;
    const {className} = this.props;
    return (
      <div
        className="container"
        style={{
          padding: 20
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <Message className={className}>
            Hello {value}
            <Message> Hello React </Message>
          </Message>
          <label>
            Name:
            <input
              type="text"
              name="username"
              ref={node => (this.inputNode = node)}
              value={value}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" disabled={Boolean(error)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

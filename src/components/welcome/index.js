import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.name }
  }

  componentDidMount() {
    this.setState({ error: this.validateForm() });
  }

  //public field same as defined in constructor this.
  handleChange = (event) => {
    this.setState({ 
      value: event.target.form.elements.username.value,
      error: this.validateForm()
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log({target: event.target})
    alert('A name was submitted: ' + this.inputNode.value);
  }

  validateForm() {
    if (!this.inputNode.value) {
      return "username can't be blank"
    }

    return '';
  }

  render() {
    const {value, error} = this.state
    return (
      <div className="container" style={{padding: 20}}>
      <form onSubmit={this.handleSubmit}>
        <Message>
          Hello {value}
          <Message>Hello React</Message>
        </Message>
      
        <label>
          Name:
              <input 
              type="text" 
              name="username"
              ref={node => (this.inputNode = node)} 
              value={value} onChange={this.handleChange} />
        </label>
        <button type="submit" disabled={Boolean(error)}>Submit</button>
      </form>
      </div>
    );
  }

}

Welcome.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string || PropTypes.number
}

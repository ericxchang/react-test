/* 
  @flow
*/
import React from "react";
import logo from "./logo.svg";
import Welcome from "./components/welcome";
import Clock from "./components/clock";
import Message from "./components/Message";
import styled, { keyframes } from "styled-components";

type Props = {};

const Page = styled.div`
  text-align: center;
  background-color: papayawhip;
`;

const Header = styled.header`
  /*  override inline style  */
  &[style] {
    font-size: 12px !important;
    color: blue !important;
  }
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1.attrs({
  className: "small text-danger"
})`
  font-size: 1.5em;
`;

const spin = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const Logo = styled.img`
  animation: ${spin} infinite 10s linear;
  height: 80px;
`;

const StyledMessage = styled(Message)`
  color: red;
  font-family: sans-serif;
`;

const StyledWelcome = styled(Welcome)`
  color: red;
  font-family: sans-serif;
`;
class App extends React.Component<Props> {
  render() {
    return (
      <Page>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <StyledMessage>StyledHello</StyledMessage>
        <StyledWelcome name="Eric" />
        <footer>
          <Clock />
        </footer>
      </Page>
    );
  }
}

export default App;

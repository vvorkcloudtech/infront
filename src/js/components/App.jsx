import React, { Component } from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
      </div>
    );
  }
}
export default App;

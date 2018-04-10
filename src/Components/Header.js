import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Asteroid List</h1>
          </div>
        </div>
      </section>
    );
  }
}

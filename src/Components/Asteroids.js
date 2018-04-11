import React, { Component } from "react";

export default class Asteroids extends Component {
  constructor(props) {
    super(props);
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() <= 10
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        "-" +
        (today.getDate() <= 10 ? "0" + (today.getDate() + 1) : today.getDate());

    this.state = { date: date, itemList: [] };
  }

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=A4IBckXcv9V1zUDbSL8guk9gHocpl9pL62T7VlNY"
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          itemList: responseData.near_earth_objects[this.state.date]
        });
      });
  }
  render() {
    const itemRows = this.state.itemList.map(key => (
      <tr key={key}>
        <td>{key.neo_reference_id}</td>
        <td>{key.name}</td>
        <td>{key.close_approach_data[0].miss_distance.kilometers} km</td>
        <td>{key.is_potentially_hazardous_asteroid ? "yes" : "no"}</td>
      </tr>
    ));

    return (
      <div>
        <h1 className="title is-3 has-text-centered">
          <strong>Closest asteroids today</strong>
        </h1>
        <div className="box">
          <article className="media">
            <table className="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead />
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Min distance</th>
                  <th>Is potentially Hazardous</th>
                </tr>
                {itemRows}
              </tbody>
            </table>
          </article>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Asteroids extends Component {
  constructor(props) {
    super(props);
    this.state = { itemList: [] };
  }
  componentDidMount() {
    fetch(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-04&end_date=2018-04-09&api_key=A4IBckXcv9V1zUDbSL8guk9gHocpl9pL62T7VlNY"
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          itemList: responseData.near_earth_objects["2018-04-09"]
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
        <div class="box">
          <article class="media">
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
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

import React, { Component } from "react";

export default class Asteroids extends Component {
  constructor(props) {
    super(props);
    this.state = { itemList: [] };
  }
  componentDidMount() {
    fetch(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-09&end_date=2017-10-09&api_key=A4IBckXcv9V1zUDbSL8guk9gHocpl9pL62T7VlNY"
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          itemList: responseData.near_earth_objects["2017-10-09"]
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
        <div class="box">
          <article class="media">
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <th>Asteroids closest today</th>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <abbr title="Id">Id</abbr>
                  </th>
                  <th>
                    <abbr title="Name">Name</abbr>
                  </th>
                  <th>
                    <abbr title="Distance">Min distance</abbr>
                  </th>
                  <th>
                    <abbr title="Hazard">Is potentially Hazardous</abbr>
                  </th>
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

import React, { Component } from "react";
import Trail from "./trail";
import "./App.css";
import logo from "./logo.svg";
import hiking1 from "./hiking1.svg";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trails: null,
      message: 'Allow location to see trails in your area'
    };
    this.locateTrails = this.locateTrails.bind(this);
  }

  componentDidMount() {
    // let error = "Uh oh, an error occured with obtaining your location"
    let options = {
      enableHighAccuracy: true,
      timeout: 9000,
      maximumAge: 0
    }

    // this.locateTrails({
    //   coords: {
    //     latitude: 32.7, 
    //     longitude: -117.15
    //   }
    // });

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ message: 'Getting trails now...' })
      this.locateTrails(position);
    }, () => console.log('it failed'), options);
  }

  locateTrails(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    axios
      .get(
        `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxResults=500&maxDistance=50&key=200239122-44089fc3cf374531e23be66be39a3e92`
      )
      .then(response => response.data.trails)
      .then(trails => this.setState({ trails, message: false }));

    console.log("Your current position is:", position);
    console.log(`Latitude : ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    console.log(`More or less ${position.coords.accuracy} meters.`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={hiking1} className="App-logo1" alt="logo1" />
          <h1 className="App-title">Trail Finder</h1>
          <h5>Discover Outdoor Adventures Close to You!</h5>
          {/* <iframe style={{width:100% max-width:1200px height:500px}} 
            frameborder="0" 
            scrolling="no" 
            src={`https://www.hikingproject.com/widget/map?favs=1&location=ip&x=-12333476&y=5431238&z=12&h=500`} /> */}
        </header>
        <div className="App-content">
        { this.state.message && <div>{this.state.message}</div> }
          {!!this.state.trails && this.state.trails.map(trails => (
            <Trail
              key={trails.id}
              name={trails.name}
              summary={trails.summary}
              location={trails.location}
              url={trails.url}
              image={trails.imgSmall}
            />
          ))}
        </div>
        <div />
      </div>
    );
  }
}

export default App;

/* eslint-disable no-undef */
import React, { Component } from 'react';
import { GoogleMap, DirectionsRenderer, withGoogleMap, withScriptjs } from 'react-google-maps';

class MarchMap extends Component {
  state = {
    directions: null,
  };

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: new google.maps.LatLng(41.85073, -87.65126),
        destination: new google.maps.LatLng(41.85258, -87.65141),
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      },
    );
  }

  render() {
    return (
      <GoogleMap defaultZoom={14} defaultCenter={{ lat: 41.85073, lng: -87.65126 }}>
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    );
  }
}

const EnhancedMarchMap = withScriptjs(withGoogleMap(MarchMap));

export default () => (
  <EnhancedMarchMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);

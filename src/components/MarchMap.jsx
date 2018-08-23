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
        origin: new google.maps.LatLng(55.802691, 49.10769),
        destination: new google.maps.LatLng(55.803742, 49.124706),
        travelMode: google.maps.TravelMode.WALKING,
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
      <GoogleMap defaultZoom={13} defaultCenter={{ lat: 55.802691, lng: -49.10769 }}>
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    );
  }
}

const EnhancedMarchMap = withScriptjs(withGoogleMap(MarchMap));

const WrappedEnhancedMarchMap = () => (
  <EnhancedMarchMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);

export default WrappedEnhancedMarchMap;

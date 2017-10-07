// Google Map Integration

import React, { Component } from 'react';

class GoogleMap extends Component {
  // create an embedded google map inside our document
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12, // zoom view
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;

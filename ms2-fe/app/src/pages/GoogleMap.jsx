import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markerPosition: { lat: -34.397, lng: 150.644 }
        };
    }

    onMarkerDragEnd = (coord, index) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState({
            markerPosition: { lat, lng }
        });

        document.getElementById('googleMapMarker').value = `${lat}, ${lng}`;
    }

    render() {
        return (
            <div style={{ width: '500px', height: '300px', margin: '10px auto' }}>
                <Map
                    google={this.props.google}
                    zoom={8}
                    initialCenter={{ lat: -34.397, lng: 150.644 }}
                    style={{ width: '840px', height: '380px' }}
                    >
                    <Marker
                        position={this.state.markerPosition}
                        draggable={true}
                        onDragend={this.onMarkerDragEnd}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBV7JOXLYy7wwGKsvd3MvnfeTU7jJwAKtw'
})(GoogleMap);
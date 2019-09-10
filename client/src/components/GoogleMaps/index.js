import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

export class MapContainer extends Component {
    displayMarkers = () => {
        return(
            <Marker position={{
                lat: this.props.coordinates.lat,
                lng: this.props.coordinates.lng
            }}/>
        )
    }
    render() {
        const mapStyles = {
            width: '140px',
            height: '140px',
        };
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{ lat: this.props.coordinates.lat, lng: this.props.coordinates.lng}}
                >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);


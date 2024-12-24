'use client';

import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useLocation } from '@/context/location-context';


const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
    latitude: number;
    longitude: number;
    onMapClick: (latitude: number, longitude: number) => void;
}

const Map: React.FC<MapProps> = ({
    latitude,
    longitude,
    onMapClick
}) => {
    const {location, setLocation} = useLocation();

    const normalizeLongitude = (lng: number) => {
        return ((lng + 180) % 360 + 360) % 360 - 180;
    }

    const MapEvents = () => {
        useMapEvents({
            click(e) {
                const {lat, lng} = e.latlng;
                onMapClick(lat, normalizeLongitude(lng));
            }
        })
        return null;
    }

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={10}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
            maxBounds={[
                [-90, -180],
                [90, 180]
            ]}
            maxBoundsViscosity={1.0}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[latitude, longitude]}>

            </Marker>
            <MapEvents />
        </MapContainer>
    );
};

export default Map;
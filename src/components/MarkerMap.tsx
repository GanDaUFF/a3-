import { Marker } from '@react-google-maps/api'
import { useState } from 'react'

interface MarkerMapProps {
  location: {
    lat: number
    lng: number
  }
  label: string
  map: google.maps.Map | null
  size: google.maps.Size
}

export default function MarkerMap({ location, label, map, size }: MarkerMapProps) {
  const [marker, setMarker] = useState<google.maps.Marker | null>(null)
  const infoWindow = new window.google.maps.InfoWindow({
    content: label,
    disableAutoPan: true,
  })
  return (
    <Marker
      position={location}
      onLoad={(marker) => { setMarker(marker) }}
      icon={{
        url: 'https://i.ibb.co/3cY8q4h/pin-Danger.png',
        scaledSize: size,
      }}
      onMouseOver={() => {
        infoWindow.setContent(label)
        infoWindow.open(map, marker)
      }}
      onMouseOut={() => {
        infoWindow.close()
      }}
    />
  )
}

"use client"
import React, { useEffect, useState } from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import { PositionProps } from "./App"

type MapViewProps = {
  movieSizeLarge: boolean
  centerPositions: PositionProps
  setCenterPositions: React.Dispatch<React.SetStateAction<PositionProps>>
}

const _MapView = ({movieSizeLarge, centerPositions, setCenterPositions}: MapViewProps) => {
  const [mapWidth, setMapWidth] = useState<string>('17vw')
  const [mapHeight, setMapHeight] = useState<string>('17vw')

  useEffect(() => {
    if(movieSizeLarge){
      setMapWidth('17vw')
      setMapHeight('17vh')
    }
    else if(!movieSizeLarge){
      setMapWidth('100vw')
      setMapHeight('100vh')
    }
  }, [movieSizeLarge, setMapWidth, setMapHeight])

  const containerStyle = {
    width: mapWidth,
    height: mapHeight,
  }
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  return (
    <div className={!movieSizeLarge ? 'Main' : 'Sub'}>
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerPositions}
          zoom={22}
          options = {{
            disableDefaultUI: true,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            mapTypeId: "satellite", // 地図タイプを航空写真に設定
          }}
        >
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

const MapView = React.memo(_MapView)
export default MapView
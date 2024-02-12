"use client"
import { useState } from 'react'

import MovieView from './MovieView'
import MapView from './MapView'
import Info from './Info'
import RecChange from './RecChenge'

export type PositionProps = {
  lat: number
  lng: number
}

export default function Home() {
  const [movieSizeLarge, setMovieSizeLarge] = useState<boolean>(true)
  const [recStart, setRecStart] = useState<boolean>(false)
  const [centerPositions, setCenterPositions] = useState<PositionProps>({ lat: 34.48521057274949, lng : 136.82488194114725 }) //中心座標

  const handleType = () => {
    setMovieSizeLarge(!movieSizeLarge)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Info centerPositions={centerPositions} />
      <MovieView movieSizeLarge={movieSizeLarge} />
      <MapView movieSizeLarge={movieSizeLarge} centerPositions={centerPositions} setCenterPositions={setCenterPositions} />
      <div className="changeBtn" onClick={handleType} />
      {recStart
        ?<img
          className='RecImage'
          width={500}
          height={500}
          alt='REC'
          src={'/rec.png'}
        />
        :<></>
      }
      <RecChange recStart={recStart} setRecStart={setRecStart} />
    </main>
  );
}

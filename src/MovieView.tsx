import React from "react"

type MovieViewProps = {
  movieSizeLarge: boolean
}

const _MovieView = ({movieSizeLarge}: MovieViewProps) => {
  return (
    <div className={movieSizeLarge ? 'Main' : 'Sub'}>
      <video autoPlay muted playsInline loop src="https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4"></video>
    </div>
  )
}

const MovieView = React.memo(_MovieView)
export default MovieView
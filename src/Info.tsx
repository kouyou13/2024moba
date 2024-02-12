import React from "react"
import { PositionProps } from "./App"

type InfoProps = {
  centerPositions: PositionProps
}

const roundDecimal = (value: number) => {
  return Math.round(value * Math.pow(10, 3)) / Math.pow(10, 3);
};


const _Info = ({centerPositions}: InfoProps) => {
  return (
    <div className="Info">
      <p>2024/01/01 01:01:01<br/>
      緯度:{roundDecimal(centerPositions.lat)}  経度:{roundDecimal(centerPositions.lng)}</p>
    </div>
  )
}

const Info = React.memo(_Info)
export default Info
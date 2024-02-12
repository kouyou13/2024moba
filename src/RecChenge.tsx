import React from "react"

type RecChangeProps = {
  recStart: boolean
  setRecStart: React.Dispatch<React.SetStateAction<boolean>>
}

const _RecChenge = ({recStart, setRecStart}: RecChangeProps) => {
  const handlerecBtn = () => {
    setRecStart(!recStart)
  }
  return(
    <>
      <img
        className="RecBtn"
        src={recStart ? './stop.png' : './start.png'}
        alt="録画開始・停止ボタン"
        width={316}
        height={316}
        onClick={handlerecBtn}
      ></img>
    </>
  )
}

const RecChange = React.memo(_RecChenge)
export default RecChange

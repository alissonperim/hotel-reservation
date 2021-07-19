import React, { useState } from 'react'
import { Button } from '../Button/Button'
import "./styles.css"

export const Container = (props) => {
  const [idx, setIdx] = useState(0)
  return (
    <div className="container">
      <div className="left-side--container">
        <header>
          <h1 className="left-side--container__h1">Floside Pop Hotel</h1>
        </header>
        <div className="travel-data--container">
          <h3 className="travel-data--container__h3">Arrival</h3>
          {console.log(MOCK_DATA[idx].arrival)}
          <em><p className="travel-data--container__p">{MOCK_DATA[idx].arrival}</p></em>
          <h3 className="travel-data--container__h3">Departure</h3>
          <em><p className="travel-data--container__p">{MOCK_DATA[idx].departure}</p></em>
          <h3 className="travel-data--container__h3">Room</h3>
          <em><p className="travel-data--container__p">{MOCK_DATA[idx].room}</p></em>
        </div>
        <Button setStyles="btn-btn">Confirm Reservation</Button>
      </div>
      <div className="right-side-container">
      </div>
    </div>
  )
}

const MOCK_DATA = [
  {
    arrival: new Date("04/02/2019 19:30").toLocaleString().replace(/(.*)\D\d+/, '$1'),
    departure: new Date("06/02/2019 10:30").toLocaleString().replace(/(.*)\D\d+/, '$1'),
    room: "Business Suite"
  }
]
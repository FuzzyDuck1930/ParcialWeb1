import { useState } from 'react'
import Cards from './components/Card/Card'
import planDeViajes from "./Data/TheData"
import "./App.css"

function App() {

  const hoteles = planDeViajes.hoteles
  const alimentacion = planDeViajes.alimentacion
  const destino = planDeViajes.destinosdla

  return (
    <>

      <div id='itAll'>
        {
        alimentacion.map((item, index) => {
          return (<div key={index}>
          <Cards  CardImg={item.imagen} price={item.precio} hotelName={item.nombre}></Cards>
          </div>)
        })
      }
      </div>

      <div id='itHot'>
        {
        hoteles.map((item, index) => {
          return (<div key={index}>
          <Cards  CardImg={item.imagen} services={item.servicios} ubication={item.ubicacion} price={item.precio} hotelName={item.nombre}></Cards>
          </div>)
        })
      }
      </div>

    </>
  )
}

export default App

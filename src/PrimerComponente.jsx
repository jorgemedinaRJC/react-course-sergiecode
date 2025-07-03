import React from 'react'

const string = 'Esto es un string'
const number = 123456
const array = ['string', 'a', 4]
const boolean = true
const funcion = () => 1 + 1
const objeto = {nombre: 'name', number: 1}
const fecha = new Date()

export const PrimerComponente = () => {

  return (
    <div>
      <h1>Variables en JSX:</h1>
      <h3>string: {string}</h3>
      <h3>number: {number}</h3>
      <h3>array: {array}</h3>
      <h3>boolean: {boolean}</h3>
      <h3>funcion: {funcion()}</h3>
      <h3>objeto: {JSON.stringify(objeto)}</h3>
      <h3>fecha: {JSON.stringify(fecha)}</h3>
    </div>
  )
}

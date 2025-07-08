import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Items = ({nombre, visto}) => {
  return (
    <li>
      {nombre} {visto ? '✅' : '⛔'}
    </li>
  )
}

export const ListadoApp = () => {
  
  const addTask = () => {
    setArreglo([...arreglo, {nombre: 'Nuevo Tema', visto: false}])
  }
  let listado = [
    {nombre: "JavaScript", visto: true},
    {nombre: "React", visto: false},
    {nombre: "HTML", visto: true},
    {nombre: "Redux", visto: false}
  ]
  const [arreglo, setArreglo] = useState(listado)
  
  return (
    <>
      <h1>Listado de Tareas</h1>
      <ol>
        {arreglo.map(item => <Items key={item.indexOf} nombre={item.nombre} visto={item.visto}></Items>)}
      </ol>
      <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>
    </>
  )
}

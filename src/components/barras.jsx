import '../css/barras.css'
import Codigo from './codigo'
import code from '../js/codigos'
import { useState } from 'react'
export default function Barras() {
    const [mostrar, setMostrar] = useState(false)
    const [codigo, setCodigo] = useState()
    return (
        <>
            <article className="nav-code">
                <ul className="list">
                    <li className="item" onClick={() => {
                        setMostrar(true)
                        setCodigo(code.quick)
                    }}>Quick sort</li>

                    <li className="item" onClick={() => {
                        setMostrar(true)
                        setCodigo(code.merge)
                    }}>Merge sort</li>

                    <li className="item" onClick={() => {
                        setMostrar(true)
                        setCodigo(code.heap)
                    }}>Heap sort</li>

                    <li className="item" onClick={() => {
                        setMostrar(true)
                        setCodigo(code.heap)
                    }}>Comb sort</li>

                    <li className="item" onClick={() => {
                        setMostrar(true)
                        setCodigo(code.burbuja)
                    }}>Bubble sort</li>
                </ul>
            </article>
            {
                mostrar && <>
                    <span class="material-icons icono" onClick={()=>{
                        setMostrar(false)
                    }}>cancel</span>
                    <Codigo codigo={codigo}></Codigo>
                </>
            }
        </>
    )
}
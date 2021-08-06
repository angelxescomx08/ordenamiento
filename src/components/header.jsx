import { useState } from 'react'
import {desordenar,ordenar} from '../js/dibujar'
import '../css/header.css'
export default function Header() {
    const [num,setNum] = useState(10)
    return (
        <section className="header">
            <article className="container">
                <select id="algoritmos" className="algoritmos" name="algoritmos">
                    <option value="quick">Quick sort</option>
                    <option value="merge">Merge sort</option>
                    <option value="heap">Heap sort</option>
                    <option value="comb">Comb sort</option>
                    <option value="burbuja">Burbuja</option>
                </select>

                <div className="slider-div">
                    <input id="slider" className="slider" type="range" min={10} max={500} onChange={(event)=>{
                        setNum(event.target.value)
                    }}/>
                    <p className="cantidad">Cantidad de elementos: <span>{num}</span></p>
                </div>
                <button onClick={desordenar} className="button">Desordenar</button>
                <button onClick={ordenar} className="button">Ordenar</button>
            </article>
        </section>
    )
}
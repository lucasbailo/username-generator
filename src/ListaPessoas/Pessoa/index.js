import { memo } from "react"

function Pessoa({nome, deletar, id}) {
    console.log(`pessoa ${nome} renderizado`)    
    return(
        <li className="is-flex is-justify-content-center is-align-items-center box mb-3">
            <div className="has-text-black-bis">
                {nome}
            </div>
            <button className="button is-danger ml-2" onClick={() => deletar(id)}>
                x
            </button>
        </li>
    )
}

export default memo(Pessoa)
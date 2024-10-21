import { useCallback, useState } from "react";
import Pessoa from "./Pessoa";
import { fakerPT_BR as faker } from '@faker-js/faker';


faker.locale = 'pt_BR'

export default function ListaPessoas(){

    const [pessoas, setPessoas] = useState([{
        nome: faker.internet.userName(),
        id:faker.string.uuid()
    },
    {
        nome: faker.internet.userName(),
        id:faker.string.uuid()
    }])

    const deletarPessoa = useCallback((id) => {
            setPessoas(listaAnterior => listaAnterior.filter(pessoa => pessoa.id !== id))
        },
        []
    )

    return(
        <div className="flex has-text-centered is-justify-content-center is-align-items-center">

            <h1 className="p-3 is-warning has-text-white has-background-grey-dark has-text-weight-bold mb-3">Gerador de Usuários aleatórios</h1>

            <ul className="column">
                {pessoas.map((pessoa, index) =>(
                    <Pessoa key={pessoa.id} {...pessoa} deletar={deletarPessoa}/>
                ))}
            </ul>
            <button 
                className="button is-primary has-background-warning has-text-white" 
                onClick={() =>{ 
                    setPessoas(listaAnterior => ([...listaAnterior, {
                        nome: faker.internet.userName(),
                        id: faker.string.uuid()
                    }]))
                }}
            >
                Gerar usuário aleatório
            </button>
        </div>
    )
}
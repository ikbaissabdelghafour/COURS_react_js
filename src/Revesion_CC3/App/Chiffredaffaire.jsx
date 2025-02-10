import React from 'react'
import { useSelector } from 'react-redux'

function Chiffredaffaire() {
    const clients = useSelector(state=>state.clients)
    const commandes = useSelector(state=>state.commandes)
return (
    <>
        <fieldset className="border p-2 mt-3">
            <legend className="w-auto">Chiffre d'affaire Total</legend>
            <div className="alert alert-info">
                {commandes.commande.reduce((acc, value) => acc + +value.total, 0)}
            </div>
        </fieldset>
        <fieldset className="border p-2">
            <legend className="w-auto">Chiffre d'affaire par client</legend>
            <ul className="list-group">
                {clients.table.map((ele, i) => (
                    <li key={i} className="list-group-item">
                        client de ID {ele.id} : &nbsp;
                        {commandes.commande.reduce(
                            (acc, fin) => (ele.id == fin.client ? acc + +fin.total : acc),
                            0
                        )}
                    </li>
                ))}
            </ul>
        </fieldset>
    </>
)
}

export default Chiffredaffaire

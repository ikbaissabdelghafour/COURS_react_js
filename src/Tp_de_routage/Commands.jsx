import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

function Commands({ command }) {
  const { id } = useParams();
  const client = command.find((ele) => ele.id == id);

  if (!client) {
    return (
      <div className="text-center mt-5">
        <h1 className="text-danger">Client non trouvé</h1>
        <Link to="/" className="btn btn-primary mt-3">
          Retour au menu
        </Link>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center col-10 row m-auto">
      <h1 className="m-auto d-flex justify-content-center p-4 bg-warning rounded">
        Les commandes du client :&nbsp;
        <span className="text-success">{client.nom} {client.prenom}</span>
        &nbsp;avec l'ID&nbsp;
        <span className="text-danger">{id}</span>
      </h1>
      <table className="table table-bordered table-striped mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">Référence</th>
            <th scope="col">Date</th>
            <th scope="col">Quantité totale</th>
            <th scope="col">Détails</th>
          </tr>
        </thead>
        <tbody>
          {client.commandes.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.date}</td>
              <td>{ele.total}</td>
              <td>
                <Link
                  to={`/Commands/details/${ele.id}`}
                  className="btn btn-info btn-sm"
                >
                  Détails de la commande
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" className="btn btn-success mt-4">
        Menu
      </Link>
    </div>
  );
}

export default Commands;

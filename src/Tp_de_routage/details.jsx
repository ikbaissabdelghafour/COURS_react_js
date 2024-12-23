import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Details({ details }) {
  const { id } = useParams();
  const data = details.filter((ele) => ele.id == id);

  if (data.length === 0) {
    return (
      <div className="text-center mt-5">
        <h1 className="text-danger">Aucun détail trouvé pour l'ID : {id}</h1>
        <Link to="/" className="btn btn-primary mt-3">
          Retour au menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Détails de la commande</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Référence Produit</th>
            <th scope="col">Quantité</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => (
            <tr key={ele.refproduit}>
              <td>{ele.id}</td>
              <td>{ele.refproduit}</td>
              <td>{ele.qte}</td>
              <td>
                <Link
                  to={`/Commands/product/${ele.refproduit}`}
                  className="btn btn-info btn-sm"
                >
                  Détails du produit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-success">
          Retour au menu
        </Link>
      </div>
    </div>
  );
}

export default Details;

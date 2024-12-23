import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Produit({ products }) {
  const { ref } = useParams();
  const product = products.find((ele) => ele.refproduit == ref);

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h1 className="text-danger">Produit non trouvé pour la référence : {ref}</h1>
        <Link to="/" className="btn btn-primary mt-3">
          Retour au menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Détails du produit</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Référence du produit</th>
            <th scope="col">Description</th>
            <th scope="col">Prix unitaire</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.refproduit}</td>
            <td>{product.description}</td>
            <td>{product.pu}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center mt-4">
     
      </div>
    </div>
  );
}

export default Produit;

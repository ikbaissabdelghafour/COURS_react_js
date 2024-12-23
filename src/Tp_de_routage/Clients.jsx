import React from 'react';
import { Link } from "react-router-dom";

function Clients({ clients }) {
  return (
    <div className="container mt-4">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((ele, index) => (
            <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.nom}</td>
              <td>{ele.prenom}</td>
              <td>
                <Link to={`/Commands/${ele.id}`} className="btn btn-primary btn-sm">
                  Liste des commandes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;

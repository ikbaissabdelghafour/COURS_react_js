import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, setStep } from './Actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Affichage = () => {
  const dispatch = useDispatch();
  const {
    count,
    incrementCount,
    decrementCount,
    resetCount,
    totalOperations,
    step,
    lastOperation,
    ana,
  } = useSelector((state) => state);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestion des Opérations de Compteur Avec Redux</h1>

      <div className="mb-4">
        <label htmlFor="stepInput" className="form-label">
          Pas:
        </label>
        <input
          id="stepInput"
          type="number"
          value={step}
          onChange={(e) => dispatch(setStep(Number(e.target.value)))}
          className="form-control w-25 mx-auto"
        />
      </div>

      <div className="mb-4">
        <p>ana est : <strong>{ana}</strong></p>
        <p>La valeur du compteur est : <strong>{count}</strong></p>
        <p>La nature de l'opération : <strong>{lastOperation}</strong></p>
        <p>Le nombre d'opérations d'incrémentation est : <strong>{incrementCount}</strong></p>
        <p>Le nombre d'opérations de décrémentation est : <strong>{decrementCount}</strong></p>
        <p>Le nombre d'opérations de mise à zéro est : <strong>{resetCount}</strong></p>
        <p>Le nombre total d'opérations est : <strong>{totalOperations}</strong></p>
      </div>

      <div className="d-flex justify-content-center gap-3">
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-success"
        >
          Incrémenter
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-danger"
        >
          Décrémenter
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="btn btn-primary"
        >
          MAZ
        </button>
      </div>
    </div>
  );
};

export default Affichage;

import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addcom,deletecom,editcom,updatecom } from '../Redux/Action'
function Command() {
    const clients= useSelector(state=>state.clients)
    const commandes=useSelector(state=>state.commandes)
    const dispatch=useDispatch();
    const [date,setDate]=useState('')
    const [total,setTotale]=useState(0)
    const [client, setClient]=useState('')
    const [numero, setNumero]=useState('')
    const [affich, setAffich]=useState('none')
    const [show,setShow]=useState({})
    console.log(commandes)
// -----------------Action for add commandes-----------------
    const handelajoute=()=>{
        dispatch(addcom({numero:Date.now() , date:date,total,client:client}))
        setClient('');
        setTotale(0);
        setDate('');
    }
    // -----------------Action for edit commandes-----------------
    useEffect(() => {  
        setClient(commandes.com.client)
        setTotale(commandes.com.total)
        setDate(commandes.com.date)
        setNumero(commandes.com.numero)
     }, [commandes.com])
     // -----------------Action for update commandes-----------------
     const handelupdate=()=>{
        dispatch(updatecom({numero:numero,date,total,client}))
        setClient('');
        setTotale(0);
        setDate('');
        setAffich('none')
     }
return (
    <>
        <form onSubmit={e => e.preventDefault()} className="mb-4">
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    id="date"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <input
                    type="number"
                    min={0}
                    value={total}
                    onChange={e => setTotale(e.target.value)}
                    id="total"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="client">Client</label>
                <select
                    onChange={e => setClient(e.target.value)}
                    value={client}
                    id="client"
                    className="form-control"
                >
                    <option value="">Select a client</option>
                    {clients.table.map(ele => (
                        <option value={ele.id} key={ele.id}>
                            {ele.id}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handelajoute} className="btn btn-primary mr-2">
                Add
            </button>
            <button
                onClick={handelupdate}
                style={{ display: affich }}
                className="btn btn-secondary"
            >
                Update
            </button>
        </form>

        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Client</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {commandes.commande.map((ele, i) => (
                    <tr key={i}>
                        <td>{ele.numero}</td>
                        <td>{ele.date}</td>
                        <td>{ele.total}</td>
                        <td>{ele.client}</td>
                        <td>
                            <button
                                onClick={() => {
                                    dispatch(editcom(ele.numero));
                                    setAffich("inline");
                                }}
                                className="btn btn-warning mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch(deletecom(ele.numero))}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
)
}

export default Command

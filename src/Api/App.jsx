import React ,{useEffect, useState}from 'react'
import axios from 'axios';
// import ''
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const  [data,setData] =useState([]);
  //  ------------------------------------------------------------------------
  //  ------------------------------------------------------------------------
  //  axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{setData(res.data)})
  //  ------------------------------------------------------------------------
  //  ------------------------------------------------------------------------
  //  fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then((res)=>res.json())
  //   .then((data)=>setData(data))
  return (
    <>
    <table border={1} cellPadding={0} cellSpacing={0} class=" table thead-dark table-striped je table-hover">
<thead class="bg-dark text-white">
    <th>userId</th>
    <th>id</th>
    <th>title</th>
    <th>completed</th>
</thead>
<tbody>
        {data.map(ele=>(
      <tr>
        <th>{ele.userId}</th>
        <th>{ele.id}</th>
        <th>{ele.title}</th>
        <th>{ele.completed?"true":"false"}</th></tr>
      )
        )}
        </tbody>
        </table>
    </>
  )
}

export default App

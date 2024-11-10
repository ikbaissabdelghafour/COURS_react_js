import React, { useState } from "react";

export default function Saisie (props){
    const [search,setSearchType]=useState('')
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" value={search} onChange={e=>setSearchType(e.target.value)} />
            <button onClick={()=>props.RechercherTheme(search)}>Saisie</button>
        </form>
    )      

}
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useCutom(url) {
    const [data , setData]=useState([])
    useEffect(()=>{
        // fetch(url).then(response=>response.json()).then(res=>setData([res]))
        axios.get(url).then(res=>setData([res.data]))
    },[])
    console.log(data)
    return (data)
}

export default useCutom

import React from 'react'

function Na3na3(props) {

    const {kissan:{object_kass,table_kass},var_brad}=props
  return (
    <>
{/* ---------------------- variable ---------------------- */}
<hr />
    <h1>Votre variable est : {var_brad} </h1>
{/* ---------------------- table ---------------------- */}
<hr />
<ul>
{
    table_kass.map(
        (ele)=><li> {ele} </li>
    )

}
<hr />
    {/* ---------------------- objet ---------------------- */}
{
  <h1> votre id : {object_kass.id} et nom est : {object_kass.nom} et votre prenom est : {object_kass.prenom} </h1>  
}

</ul>
    </>
  )
}

export default Na3na3

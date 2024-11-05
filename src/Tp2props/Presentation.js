export  default function Presentation0(props){
    const {nom,prenom , adresse:{rue,ville}} = props
    return(
<>
<h1>satut {nom} {prenom} </h1>
<h3> {rue} {ville}</h3>
</>
    )
}
export function Presentation1(props){
    const {personne:{nom,prenom,adress:{ville,rue}}}=props
    return(
        <>
        <ul>
            <li>{nom}</li>
            <li>{prenom}</li>
            <li>{rue}</li>
            <li>{ville}</li>
        </ul>
        </>
    )
}
export function Presentation2(props){
    const {contact:{personne:{nom,prenom,adresse:{rue,ville},diplom}}}=props
    return(
        <>
        <ul>
            <li>{nom}</li>
            <li>{prenom}</li>
            <li>{rue}</li>
            <li>{ville}</li>
            <li>{diplom}</li>
        </ul>
        
        </>
    )
}
export function Presentation3(props){
    const {contact:{personne:{nom,prenom,adresse:{rue,ville}},diplom}}=props
    return(
        <>
        <ul>
            <li>{nom}</li>
            <li>{prenom}</li>
            <li>{rue}</li>
            <li>{ville}</li>
            <li>{diplom}</li>
        </ul>
        </>
    )
}
import React ,{Componet} from './react'
function Presentation(props){
    const {nom , prenom , children}=props
    return(
        <>
            <div> {nom}</div>
            <div> {prenom}</div>
            <>
            {children}
            </>
        </>
    )
}
export {Presentation}
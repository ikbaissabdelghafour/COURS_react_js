export const addcli='addcli'
export const supcli='supcli'
export const modifcli='modifcli'

export const  ajouterclient =(client)=>({type:addcli,payload:client})
export const  supprimerclient =(id)=>({type:supcli,payload:id})
export const  modifierclient =(newclient)=>({type:modifcli,payload:newclient})

export const addcom='addcom'
export const supcom='supcom'
export const modifcom='modifcom'
export const editcom='editcom'

export const  ajoutercommande =(commande)=>({type:addcom,payload:commande})
export const  supprimercommande =(id)=>({type:supcom,payload:id})
export const  modifiercommande =(newcommande)=>({type:modifcom,payload:newcommande})
export const editercommande =(id)=>({type:editcom,payload:id})

// ------------------------ ELEVES ---------------------------
export const ADDELE = "ADDELE"
export const SUPELE = "SUPELE"
export const EDITELE = "EDITELE"
export const FILTERELE="FILTERELE"
export const NBR="NBR"
export const UPDELE = "UPDELE"

export const ajouterEleve = (eleve ) =>({type:ADDELE , payload:eleve})
export const supprimerEleve = (id)=>({type:SUPELE, payload:id})
export const editerEleve= (id)=>({type:EDITELE, payload:id})
export const updateEleve = (newEleve)=>({type:UPDELE, payload:newEleve})
export const filtreEleve = (clas)=>({type:FILTERELE, payload:clas})
export const NBR_eleve = (idclass, pass)=>({type:NBR, payload:{idclass:idclass , pass:pass}})


// ------------------------ class ---------------------------

export const ADDCLASS = "ADDCLASS"
export const SUPCLASS = "SUPCLASS"
export const UPDCLASS = "UPDCLASS"
export const EDITCLASS = "EDITCLASS"

export const ajouterClass = (Class ) =>({type:ADDCLASS , payload:Class})
export const supprimerClass = (id)=>({type:SUPCLASS, payload:id})
export const editerClass= (id)=>({type:EDITCLASS, payload:id})
export const updateClass = (newClass)=>({type:UPDCLASS, payload:newClass})

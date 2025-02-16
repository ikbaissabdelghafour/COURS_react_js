export const ADDSERV = "ADDSERV"
export const SUPSERV = "SUPSERV"
export const EDITSERV = "EDITSERV"
export const MODIFSERV = "MODIFSERV"
export const UPDNBEMPL = "UPDNBEMPL"
export const UPDBUDGET = "UPDBUDGET"

export const ajouterService = (service)=>({type:ADDSERV,payload:service})
export const supprimerService=(numero)=>({type:SUPSERV,payload:numero})
export const editerService=(numero)=>({type:EDITSERV,payload:numero})
export const modiferService=(newservice)=>({type:MODIFSERV,payload:newservice})
export const modifer_Nb_Employee=(numero_service,pas)=>({type:UPDNBEMPL,payload:{service_num:numero_service,pas:pas}})
export const modife_budget=(numero_service,pas)=>({type:UPDBUDGET,payload:{service_num:numero_service,pas:pas}})


export const ADDEMPL="ADDEMPL"
export const EDITEMPL="EDITEMPL"
export const SUPEMPL="SUPEMPL"
export const MODIFEMPL="MODIFEMPL"
export const FILTEREMPL="FILTEREMPL"

export const ajouterEmplyer = (emplyer)=>({type:ADDEMPL , payload:emplyer})
export const supprimerEmplyer = (id)=>({type:SUPEMPL , payload:id})
export const EditerEmplyer = (id)=>({type:EDITEMPL , payload:id})
export const modiferEmployer = (new_employer)=>({type:MODIFEMPL, payload:new_employer})
export const filterEmployer=(service_num)=>({type:FILTEREMPL,payload:service_num})

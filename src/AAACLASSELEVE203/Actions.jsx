const addclass="ADDCLASS"
const supclass="SUPCLASS"
const editclass="EDITCLASS"
const modifclass="MODIFCLASS"
const updatenbeleve="UPDATENBCLASSE"
const ajouterclasse=(classe)=>({type:addclass,payload:classe})
const supprimerclasse=(id)=>({type:supclass,payload:id})
const editerclasse=(id)=>({type:editclass,payload:id})
const modifierclasse=(newclasse)=>({type:modifclass,payload:newclasse})
const modifiernbeleves=(idclass,pas)=>({type:updatenbeleve,payload:{idclass,pas}})
export {modifiernbeleves,ajouterclasse,supprimerclasse,editerclasse,modifierclasse}
export {filtcalss ,updatenbeleve,addclass,supclass,editclass,modifclass}

const addelev="ADDELEV"
const supelev="SUPELEV"
const editelev="EDITELEV"
const modifelev="MODIFELEV"
const filtcalss="FILTCLASS"
const filtrerclass=(classe)=>({type:filtcalss,payload:classe})
const ajoutereleve=(eleve)=>({type:addelev,payload:eleve})
const supprimereleve=(id)=>({type:supelev,payload:id})
const editereleve=(id)=>({type:editelev,payload:id})
const modifiereleve=(neweleve)=>({type:modifelev,payload:neweleve})
export {filtrerclass,ajoutereleve,supprimereleve,editereleve,modifiereleve}
export {addelev,supelev,editelev,modifelev}

export const ADD = "ADD"
export const SOS = "SOS"
export const MISE = "MISE"
export const STEP = "STEP"
export const add=()=> ({type:ADD}) 
export const sos=()=> ({type:SOS}) 
export const mise=()=>({type:MISE}) 
export const step=(stp)=>({type:STEP , payload:stp}) 
export const CREATE ="CREATE"
export const UPDATE ="UPDATE"
export const SHOW ="SHOW"
export const DELET ="DELETE"
export const create =   (new_obj)=>({type:CREATE  , payload:new_obj})
export const show =     (id)=>({type:SHOW  , payload:id})
export const update =   (new_obj)=>({type:UPDATE  , payload:new_obj})
export const delet =   (id)=>({type:DELET  , payload:id})
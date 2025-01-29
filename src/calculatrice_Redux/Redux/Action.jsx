export const ADD = "ADD" 
export const SOS = "SOS" 
export const PROD = "prod" 
export const DIV = "div"


export const add=(obj)=>    ({ type:ADD  , value:obj })
export const sos=(obj)=>    ({ type:SOS  , value:obj })
export const prod=(obj)=>   ({ type:PROD , value:obj })
export const div=(obj)=>    ({ type:DIV  , value:obj })
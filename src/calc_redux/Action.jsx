const add = "ADD"
const sous = "SOUS"
const prod = "PROD"
const div = "DIV"
const maz = "MAZ"

const   addition =(a,b)=>({type:add, payload:{a:a,b,b}})
const   soustr =(a,b)=>({type:sous, payload:{a:a,b,b}})
const   produit =(a,b)=>({type:prod, payload:{a:a,b,b}})
const   division =(a,b)=>({type:div, payload:{a:a,b,b}})
const   mise_a_0 =()=>({type:maz, payload:0})

export {addition ,soustr ,produit ,division ,mise_a_0}

// -----------------Action for clients-----------------

export const ADDCLI = "ADDCLI";
export const DELETECLI = "DELETECLI";
export const UPDATECLI = "UPDATECLI";
export const EDITCLI= "EDITCLI";
export const initialiseState1="initialiseState1"

export const addcli = (obj) => ({type:ADDCLI,payload:obj})
export const updatecli = (obj) => ({type:UPDATECLI, payload:obj})
export const editcli = (id) => ({type:EDITCLI,payload:id})
export const deletecli = (id) => ({type:DELETECLI,payload:id})
export const INITIALEVALUE = (data ) => ({type:initialiseState1,payload:data})

// -----------------Action for commandes-----------------

export const ADDCOM = "ADDCOM";
export const DELETECOM = "DELETECOM";
export const UPDATECOM = "UPDATECOM";
export const EDITCOM= "EDITCOM";

export const addcom = (obj) => ({type:ADDCOM,payload:obj})
export const updatecom = (obj) => ({type:UPDATECOM, payload:obj})
export const editcom = (id) => ({type:EDITCOM,payload:id})
export const deletecom = (id) => ({type:DELETECOM,payload:id})



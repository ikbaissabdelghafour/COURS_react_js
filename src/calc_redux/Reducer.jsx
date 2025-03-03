const initialState = {

}

const reduce = (state = initialState, action) => {
  switch (action.payload.type) {

  case action.type:
    return { ...state, ...action.payload }

  default:
    return state
  }
}

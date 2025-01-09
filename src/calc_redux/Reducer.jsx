const initialState = {

}

const reduce = (state = initialState, action) => {
  switch (action.payload.type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}

import React , {createContext} from 'react'
import Main from './main';
import Child2 from './Child2';
export const Sourse = createContext();

const App = () => {
    const table = ['ahmadi', 'mohamed', "stof"];
  return (
        <>
      <Sourse.Provider value={table} >
      <Main/>
      
    </Sourse.Provider>
      </>
  )
}

export default App

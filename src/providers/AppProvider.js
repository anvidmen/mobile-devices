import { createContext, useState } from 'react'

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  
  return (
    <AppContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

export const AppContext = createContext()
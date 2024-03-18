import { useEffect } from 'react'
import Add from './components/Add'
import List from './components/List'
import { useAppDispatch } from './store/store'
import { fetchPerson } from './store/features/personSlice'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPerson());
  });

  return (
    <div>
    <Add />
    <List />
    <Products />
    <Cart />
    </div>
  )
}

export default App;

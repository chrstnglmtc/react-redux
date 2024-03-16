import { useEffect } from 'react'
import Add from './components/Add'
import List from './components/List'
import { useAppDispatch } from './store/store'
import { fetchPerson } from './store/features/personSlice'

function App() {
  
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPerson());
  });

  return (
    <div>
    <Add />
    <List />
    </div>
  )
}

export default App

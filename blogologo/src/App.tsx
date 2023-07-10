import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import EntranceMain from './components/Main/EntranceMain'
import { NotFoundPage } from './components/pages/NotFoundPage'
import { AuthProvider } from './components/Provider/authProvider'


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<EntranceMain />} />
            <Route path='entrancePage' element={<EntranceMain />} />
            <Route path='entrancePage/:id' element={<EntranceMain />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

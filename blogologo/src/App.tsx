import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import EntrancePage from './components/Main/EntranceMain'
import { NotFoundPage } from './components/pages/NotFoundPage'
import PostItemPage from './components/pages/PostItemPage/postItem'
import { SignIn } from './components/pages/SignInPage'
import { SignUp } from './components/pages/SignUp'
import { AuthProvider } from './components/Provider/authProvider'


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-wrapper"> {/* Добавьте класс стиля или стили к корневому элементу */}
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<EntrancePage />} />
              <Route path='entrancePage' element={<EntrancePage />} />
              <Route path='entrancePage/:id' element={<EntrancePage />} />
              <Route path='/entrancePage/:postId' element={<PostItemPage />} />
              <Route path='/pageSignIn' element={<SignIn />} />
              <Route path='/pageSignUp' element={<SignUp />} />
              {/* <Route path='/entrancePage/:id/:postId' element={<PostItemPage />} /> */}
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './components/Header/ButtonUser/AuthButtons/authProvider'
import Layout from './components/Layout'
import EntrancePage from './components/Main/EntranceMain'
import { NotFoundPage } from './components/pages/NotFoundPage'
import PostItemPage from './components/pages/Posts/PostItemPage'
import { SignIn } from './components/pages/SignInPage'
import { SignUp } from './components/pages/SignUp'


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-wrapper">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='entrancePage' element={<EntrancePage />} />
              <Route path='entrancePage/:pageId' element={<EntrancePage />} />
              <Route path='post/:postId' element={<PostItemPage />} />
              <Route index element={<EntrancePage />} />
              <Route path='/pageSignIn' element={<SignIn />} />
              <Route path='/pageSignUp' element={<SignUp />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

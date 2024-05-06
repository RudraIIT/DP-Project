import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import { 
	Home,
	Type1,
	Type2,
	Type3,
	SpeechRecognitionPage,
} from './Components/index.ts'



const router = createBrowserRouter(
	createRoutesFromChildren(
		<Route path="/" element={<App/>}>
			<Route path="" element={<Home/>}/>
			<Route path="/type1" element={<Type1/>}/>
			<Route path="/type2" element={<Type2/>}/>
			<Route path="/type3" element={<Type3/>}/>
			<Route path="/speech-recognition" element={<SpeechRecognitionPage/>} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

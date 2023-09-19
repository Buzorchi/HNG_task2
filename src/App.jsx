import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './Components/Page'

import MovieDetails from './Components/MovieDetails'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path= "/" element={<Page />}/>
      <Route path= "/moviedetails" element={<MovieDetails />}/>
    </>
    
));

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App


// const App = () => {
//   return (
//     <div>
//       <Header/>
//       {/* <Featured/>
//       <Footer/>
//       <MagicBox/> */}
//     </div>
//   )
// }

// export default App

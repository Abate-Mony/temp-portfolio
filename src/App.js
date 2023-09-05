import './App.css';
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter, Navigate, redirect } from "react-router-dom"
// import { loader as homeLoader } from './pages/Home';
// import { loader as dashLoader } from './pages/Dashboard';
// import ErrorElement from './components/ErrorElement';
import RootElement from './components/RootElement';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
const router = createBrowserRouter([
  {
    path: "/",//this is main route of the app here cause im using createbrowswer router 
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: "contact",
        element: <Contact />
      }, {
        path: "projects",
        element: <Projects />
      }, {
        path: "about",
        element: <About/>
      }
    ]
  }, {
    path: "*",
    element: <div>some thing went wrong</div>
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;

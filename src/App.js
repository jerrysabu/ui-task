import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Hr from "./components/Hr"
import Customers from "./pages/Customers"
function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <>
                <Dashboard />
              </>
            </>
          }
        />
        <Route
          exact
          path="/Customers"
          element={
            <>
              <>
                <Customers />
              </>
            </>
          }
        />
      </Routes>{" "}
      <Navbar />
    </Router>
  )
}

export default App

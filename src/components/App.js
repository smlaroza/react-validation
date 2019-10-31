import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "/Users/punchcode/Projects/react-validation/src/styles/base.css"
import Forms from "./forms"
import submitted from "./submitted"

function App() {
  return (
    <Router>
      <div className="routes">
        <Route exact path="/" component={Forms} />
        <Route path="/submitted" component={submitted} />
      </div>
    </Router>
  )
}

export default App

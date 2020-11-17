import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom"
import Home from "./pages/home"
import Work from "./pages/work"
import About from "./pages/about"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/work' component={Work} />
                <Route exact path='/concept' component={Concept} />
                <Route exact path='/about-me' component={About} />
                <Route path='*' component={NoMatch} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App

function Concept() {
    return <p>Solutions that help you.</p>
}

function NoMatch() {
    let location = useLocation()
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

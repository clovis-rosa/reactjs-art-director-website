import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom"
import Home from "./pages/home"
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

function Work() {
    return <p>Discover our numerous opportunities</p>
}

function Concept() {
    return <p>Solutions that help you.</p>
}

function About() {
    return <p>Feel free to reach us.</p>
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

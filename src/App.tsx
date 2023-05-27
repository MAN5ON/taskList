import './styles/App.css'
import {Header} from "./components/header";
import {NavBar} from "./components/nav";
import {Tasks} from "./components/main";

function App() {
    return (<div className="app">
        <Header/>
        <div className="appWrap">
            <aside className="appWrapNav">
                <NavBar/>
            </aside>
            <main className="appWrapMain">
                <Tasks/>
            </main>
        </div>
    </div>)
}

export default App

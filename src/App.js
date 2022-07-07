import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import News from "./pages/News"

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="news" element={<News/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
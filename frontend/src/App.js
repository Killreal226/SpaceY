import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EventsMap from "./pages/EventsMap"
import CapeCanaveral from "./pages/places/CapeCanaveral"



function App(){
    return(
        <div>
            <BrowserRouter>
                <div className="wrapper">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/events_map" element={<EventsMap />}/>
                        <Route path="/Cape_Canaveral" element={<CapeCanaveral />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
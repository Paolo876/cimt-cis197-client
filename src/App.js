import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
// pages
import MainMenu from './pages/MainMenu/MainMenu';
import Login from './pages/Login/Login';
import AddResource from './pages/AddResource/AddResource';
import AddIncident from './pages/AddIncident/AddIncident';
import Search from './pages/Search/Search';
import ResourceReport from './pages/ResourceReport/ResourceReport';

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        {authIsReady &&
          <Routes>
            <Route element={ user ? <MainMenu/> : <Navigate to="/login"/> } path="/"/>
            <Route element={ user ? <AddResource/> : <Navigate to="/login"/> } path="/add-resource"/>
            <Route element={ user ? <AddIncident/> : <Navigate to="/login"/> } path="/add-incident"/>
            <Route element={ user ? <Search/> : <Navigate to="/login"/> } path="/search"/>
            <Route element={ user ? <ResourceReport/> : <Navigate to="/login"/> } path="/resource-report"/>
            <Route element={ !user ? <Login/> : <Navigate to="/"/> } path="/login"/>
          </Routes>
        }
      </BrowserRouter>
      <footer>Paolo Bugarin | Cesar Correa | Oscar Kim | CIS-197 Summer 2022</footer>
    </div>
  );
}

export default App;

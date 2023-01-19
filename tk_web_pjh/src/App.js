import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { MainPage, MasterPage, TeacherPage } from './pages';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            {/* <Route path="/" exact={true} element={<MainPage />} /> */}
            <Route path="/" element={<MasterPage />} />
            <Route path="/teacher" element={<TeacherPage />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;

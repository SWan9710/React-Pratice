import './App.css';
import Header from './Header';
import Main from './Main'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <Router>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={[<Header />, <Main />]} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </div>
  );
}

export default App;

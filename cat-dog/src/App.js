import './App.css';
import Header from'./Header.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cat from './Cat';
import Dog from './Dog';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <Router>
      <RecoilRoot>
          <div className="App">
            <Routes>
              <Route path='/' element={[<Header/>,<Cat/>]}/>
              <Route path='/dog' element={[<Header/>,<Dog/>]}/>
            </Routes>
          </div>  
      </RecoilRoot>
    </Router>
  );
}

export default App;

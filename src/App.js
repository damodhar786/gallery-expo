import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './main/Main';
import Main1 from './main/Main1';
import Main2 from './main/Main2';
import Main3 from './main/Main3';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />} />       
          <Route path='/nextimage1' element={<Main1 />} />       
          <Route path='/nextimage2' element={<Main2 />} />       
          <Route path='/nextimage3' element={<Main3 />} />       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

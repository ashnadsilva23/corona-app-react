import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddData from './components/AddData';
import Delete from './components/Delete';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddData/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/view' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

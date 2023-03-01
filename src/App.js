import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TestView } from './component/Test';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/testview" element={<TestView />}/>
      <Route path="/" element={<TestView />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

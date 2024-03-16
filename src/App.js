import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

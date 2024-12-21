
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from "./components/Loader";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import BookDescription from "./pages/BookDescription";

import './stylesheets/alignments.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/custom-components.css';
import './stylesheets/form-elements.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const { loading } = useSelector((state) => state.loaders);

  return (
    <div>

      {loading && <Loader />}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/book/:id" element={ <ProtectedRoute> <BookDescription /> </ProtectedRoute> } />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

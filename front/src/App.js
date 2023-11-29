import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './contexts/AuthContextApiHook';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
        <ToastContainer />
        <Routes />
    </AuthProvider>
  );
}

export default App;

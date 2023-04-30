import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
// import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import { AuthContextProvider } from './Store/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
);

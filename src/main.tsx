import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import { store } from "./App";
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

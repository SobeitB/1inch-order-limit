import ReactDOM from 'react-dom/client'
import App from "app/App";
import {Buffer} from 'buffer';
window.Buffer = window.Buffer || Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

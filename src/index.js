import React from 'react';
import {createRoot} from 'react-dom/client'
import TodoApp from './components/TodoApp';
import 'bootstrap/dist/css/bootstrap.css';


const root = createRoot(document.getElementById('root'));
root.render(<TodoApp />)
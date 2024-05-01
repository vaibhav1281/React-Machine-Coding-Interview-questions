
import React from  'react';
import ReactDOM from  'react-dom/client';
import TodoList from './components/TodoList';


const App = () => {
  return (
    <div>
        <TodoList/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
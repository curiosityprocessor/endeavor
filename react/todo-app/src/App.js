import {useState} from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                text: 'React 101',
                checked: true,
            },
            {
                id: 2,
                text: 'React Component Styling',
                checked: true,
            },
            {
                id: 3,
                text: 'Todo App',
                checked: false,
            },

        ]
    );

    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
}

export default App;

import './styles/style.scss';
import { Title } from "./components/Title.jsx"
import { TodoList } from "./components/TodoList.jsx"
import { Inputform } from "./components/Inputform.jsx"
import { useState } from 'react';


function App() {
    const [taskList, setTaskList] = useState([]);
    return (
        <div className="App">
            <Title />
            <TodoList taskList={ taskList } setTaskList={ setTaskList } />
            <Inputform taskList={taskList} setTaskList={ setTaskList } />
        </div>
    );
}

export default App;

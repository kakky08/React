import "./styles/style.scss"
import { Title } from  './components/Title.jsx'
import { Inputform } from './components/Inputform'
import { TodoList } from './components/TodoList'
import { useState } from "react"

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

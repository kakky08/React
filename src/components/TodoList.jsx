import React from 'react'
import { useState } from 'react';

export const TodoList = ({ taskList, setTaskList }) => {

    const [taskState, setTaskState] = useState('すべて');

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    }

    const handleChengeState = (task) => {
        task.state = task.state === '作業中' ? '完了' : '作業中';
        setTaskList([...taskList]);
    }

    const handleStateSearch = (e) => {
        setTaskState(e.target.value);
    }

    return (
        <div className='todo-list'>
            <form className='form'>
                <input className='input' type="radio" name="state" value="すべて" onClick={handleStateSearch} checked={taskState === 'すべて'}/>すべて
                <input className='input' type="radio" name="state" value="作業中" onClick={handleStateSearch} checked={taskState === '作業中'}/>作業中
                <input className='input' type="radio" name="state" value="完了" onClick={handleStateSearch} checked={taskState === '完了'} />完了
            </form>
            <table className='table'>
                <thead className='thead'>
                    <tr className='row'>
                        <th className='header'>ID</th>
                        <th className='header'>コメント</th>
                        <th className='header'>状態</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {taskList.filter(task => taskState === task.state || taskState === 'すべて').map((task, index) => (
                        <tr  className='row' key={index}>
                            <td className='data'>{ task.id }</td>
                            <td className='data'>{ task.text }</td>
                            <td className='data'>
                                <button className='button completeion' onClick={() => handleChengeState(task)}>{ task.state }</button>
                                <button className='button delete' onClick={() => handleDelete(task.id)}>削除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

import React, { useState } from 'react'

export const Inputform = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState('');
    const [taskId, setTaskId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskId(taskId + 1);
        setTaskList([
            ...taskList,
            {
                id: taskId,
                text: inputText,
                state: '作業中'
            }
        ]);
        setInputText('');
    }
    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className='input-form'>
            <h2 className='title'>新規タスクの追加</h2>
            <form className='form' onSubmit={ handleSubmit }>
                <input className='input' type="text" onChange={ handleChange } value={ inputText } />
                <button className='submit'>追加</button>
            </form>
        </div>
    )
}

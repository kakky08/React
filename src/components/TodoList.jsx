import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {
    return (
        <div className='todo-list'>
            <form className='form'>
                <input className='input' type="radio" name="state" value="all" />すべて
                <input className='input' type="radio" name="state" value="work" />作業中
                <input className='input' type="radio" name="state" value="completion" />完了
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
                    {taskList.map((task, index) => (
                        <tr className='row' key={index}>
                            <td className='data'>{ index }</td>
                            <td className='data'>{ task.text }</td>
                            <td className='data'>
                                <button className='button completeion'>完了</button>
                                <button className='button delete'>削除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

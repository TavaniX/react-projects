import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editID, setEditID] = useState(null)
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

    const handleSumbit = (e) => {
        e.preventDefault()
        if (!name) {
            // display alert here
        } else if (name && isEditing) {
            // deal with edit
        } else {
            // show alert
            // create new item
            const newItem = { id: new Date().getTime().toString(), title: name }
            setList([...list, newItem])
            setName('')
        }
    }

    return (
        <section className='section-center'>
            <form className='grocery-form' onSubmit={handleSumbit}>
                {alert.show && <Alert />}
                <h3>grocery bud</h3>
                <div className='form-control'>
                    <input
                        type='text'
                        className='grocery'
                        placeholder='ex. eggs'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit' className='submit-btn'>
                        {isEditing ? 'Edit' : 'Submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className='grocery-container'>
                    <List items={list} />
                    <button className='clear-btn' onClick={() => {}}>
                        clear items
                    </button>
                </div>
            )}
        </section>
    )
}

export default App

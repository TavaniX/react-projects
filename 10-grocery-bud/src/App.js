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
        console.log('success')
    }

    return (
        <section className='section-center'>
            <form className='grocery-form' onSumit={handleSumbit}>
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
            <div className='grocery-container'>
                <List />
                <button className='clear-btn' onClick={() => {}}>
                    clear items
                </button>
            </div>
        </section>
    )
}

export default App

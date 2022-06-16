import React from 'react'

const Buttons = ({ btnClass, icon, index, setIndex, action }) => {
    const handleIndex = (action) => {
        return setIndex(action === 'increase' ? index + 1 : index - 1)
    }

    return (
        <button className={btnClass} onClick={() => handleIndex(action)}>
            {icon}
        </button>
    )
}

export default Buttons

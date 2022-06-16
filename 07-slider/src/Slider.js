import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import data from './data'

import Review from './Review'
import Buttons from './Buttons'

const Slider = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = people.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000)
        return () => clearInterval(slider)
    }, [index])

    return (
        <div className='section-center'>
            {people.map((person, personIndex) => {
                let position = 'nextSlide'

                if (personIndex === index) {
                    position = 'activeSlide'
                }

                if (
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)
                ) {
                    position = 'lastSlide'
                }
                return <Review person={person} position={position} />
            })}

            <Buttons
                btnClass={'prev'}
                icon={<FiChevronLeft />}
                index={index}
                setIndex={setIndex}
                action={'decrease'}
            />
            <Buttons
                btnClass={'next'}
                icon={<FiChevronRight />}
                index={index}
                setIndex={setIndex}
                action={'increase'}
            />
        </div>
    )
}

export default Slider

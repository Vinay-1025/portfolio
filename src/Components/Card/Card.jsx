import React from 'react';
import './Card.css';
import { BiBuilding, BiLineChart, BiCalendarStar } from 'react-icons/bi';


const courses = [
    {
        title: 'Statistics',
        icon: <BiLineChart />,
    },
    {
        title: 'Calender',
        icon: <BiCalendarStar />,
    },
    {
        title: 'Progress',
        icon: <BiBuilding />,
    },
];

const Card = () => {
    return (
    <div className='card-container'>
        {courses.map((item) => (
            <div className='card'>
                <div className="card-cover">
                    {item.icon}
                </div>
                <div className="card-title">
                    <h2>{item.title}</h2>
                </div>
            </div>
        ))}
    </div>
    )
}

export default Card

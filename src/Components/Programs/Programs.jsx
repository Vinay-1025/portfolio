import React from 'react';
import './Programs.css';
import program_2 from '../../assets/leave.jpg';
import program_3 from '../../assets/query.jpg';
import out from '../../assets/out_icon.png';
import leave from '../../assets/leave_icon.png';
import query from '../../assets/query_icon.png';
import arrow from '../../assets/dark-arrow.png';
import { Link } from 'react-scroll';

const Programs = ({ setOpenModel, setOpenModell }) => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program_2} alt='' />
                <div className="caption">
                    <img src={out} alt="" />
                    <h1>OUTING</h1>
                    <p>Apply Outing</p>
                    <button className='butn' onClick={() => setOpenModel(true)}>Apply <img src={arrow} alt="" className='imgr' /></button>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt='' />
                <div className="caption">
                    <img src={leave} alt="" />
                    <h1>LEAVE</h1>
                    <p>Apply Leave</p>
                    <button className='butn' onClick={() => setOpenModell(true)}>Apply <img src={arrow} alt="" className='imgr' /></button>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt='' />
                <div className="caption">
                    <img src={query} alt="" />
                    <h1>QUERIES</h1>
                    <p>Contact here</p>
                    <Link to='contact' smooth={true} offset={-230} duration={500}><button className='butn'>Commit <img src={arrow} alt="" className='imgr' /></button></Link>
                </div>
            </div>
        </div>
    );
}

export default Programs;

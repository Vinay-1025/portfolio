import React, { useState } from 'react';
import './Progress.css';
import { BiSolidBriefcaseAlt, BiSolidHomeSmile, BiSolidSchool, BiUser } from 'react-icons/bi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CountUp from 'react-countup';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentHeader from '../ContentHeader/ContentHeader';
import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip } from 'chart.js';
Chart.register (
    LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip
)


const labels = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

const labelsy = ['P1','P2','E1','E2','E3','E4'];

const options = {
    plugins:{
        legend:{
            position:'bottom',
        },
        title:{
            display: 'true',
            text:"LEAVING & OUTING RATIO",
        }
    }
}

const optionsy = {
    indexAxis:'y',
    plugins:{
        legend:{
            position:'bottom',
        },
        title:{
            display: 'true',
            text:"STUDENT DATA ANALYSER",
        }
    }
}

const data = {
    labels,
    datasets : [
        {
            label:'Leaves',
            data : [20,90,59,47,30,28,78,98,67,47,50,37],
            backgroundColor: '#6A98A6',
        },
        {
            label:'Outing',
            data : [70,94,29,57,80,18,38,68,27,77,90,17],
            backgroundColor: '#8E8568',
        }
    ]
}

const datay = {
    labels:labelsy,
    datasets : [
        {
            label:'No.of Absents',
            data:[400,300,200,400,50,300],
            backgroundColor:'#5A5D60',
        },
        {
            label:'No.of Presents',
            data:[800,1200,1200,490,1450,900],
            backgroundColor:'#9B756D',
        }
    ]
}


const Progress = () => {
    const pcards = [
        { id: 1, title: 'In Campus', value: 75/20, count: 6000-2000, icon: <BiSolidSchool />, caption: 'Students', color: '#ac437a' },
        { id: 2, title: 'In Outing', value: 450/5, count: 1629, icon: <BiSolidBriefcaseAlt />, caption: 'Students', color: '#4488ad' },
        { id: 3, title: 'In Leave', value: 180/3, count: 271, icon: <BiSolidHomeSmile />, caption: 'Students', color: '#22ccaaee' },
    ];

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className='fixed-scroll'>
            <ContentHeader title='Dashboard'/>
            <div className="row">
                {pcards.map(pcard => (
                    <div 
                        key={pcard.id} 
                        className="col-md-4" 
                        onMouseEnter={() => setHoveredCard(pcard.id)} 
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="pcard">
                            <h5 className="pcard-title">{pcard.title}</h5>
                            <div className="pcard-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="icon-container">
                                        {pcard.icon}
                                    </div>
                                    <div className="progress-container">
                                        <CircularProgressbar
                                            value={hoveredCard === pcard.id ? pcard.value : pcard.value}
                                            text={`${pcard.value}%`}
                                            styles={pcard.value < 75 ? buildStyles({
                                                textColor: "#212EA0",
                                                pathColor: "#212EA0",
                                                trailColor: "#c1d4e0"
                                            }) : buildStyles({
                                                textColor: "#CC0303",
                                                pathColor: "#CC0303",
                                                trailColor: "#c1d4e0"
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="count-container">
                                    <CountUp className='counter'
                                        start={hoveredCard === pcard.id ? 0 : pcard.count} 
                                        end={pcard.count} 
                                        duration={1} 
                                        delay={hoveredCard === pcard.id ? 0 : 0} 
                                    />
                                    {pcard.caption}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-md-6 col-12">
                    <Bar options={options} data={data} />
                </div>
                <div className="col-md-6 col-12">
                    <Bar options={optionsy} data={datay}/>
                </div>
            </div>
        </div>
    );
};

export default Progress;

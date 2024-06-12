import React, { useRef, useState, useEffect } from 'react';
import './Stack.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentHeader from '../ContentHeader/ContentHeader';
import { BiAnalyse, BiCheckDouble, BiMessageSquareCheck, BiSolidCommentDetail, BiSolidCommentEdit, BiSolidSortAlt, BiSolidTrashAlt, BiTransferAlt, BiTrashAlt } from 'react-icons/bi';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Stack = () => {
    const [state, setState] = useState([
        {
            endDate: new Date(),
            startDate: addDays(new Date(), -15),
            key: 'selection'
        },
    ]);

    const [showDatePicker, setShowDatePicker] = useState(false);

    const dataRangeRef = useRef(null);

    const handleInputClick = () => {
        setShowDatePicker(true);
    }

    const handleClickOutside = (event) => {
        if (dataRangeRef.current && !dataRangeRef.current.contains(event.target)) {
            setShowDatePicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    const [editId, setEditId] = useState(null);
    const [data, setData] = useState([
        { id: 1, name: "G Venkatesh", course: "E3-CSE", studentId: "S191070", purpose: "Outing", status: "Pending" },
        { id: 2, name: "G Vinay Sriram", course: "E4-CSE", studentId: "S191032", purpose: "Outing", status: "Pending" },
        { id: 3, name: "P Mohan", course: "E2-CSE", studentId: "S190089", purpose: "Outing", status: "Pending" },
        // Add more rows as needed
    ]);

    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleEdit = (id) => {
        setEditId(id);
    }

    const handleChange = (e, field, id) => {
        const newData = data.map(row => {
            if (row.id === id) {
                return { ...row, [field]: e.target.value };
            }
            return row;
        });
        setData(newData);
    }

    const handleSave = () => {
        setEditId(null);
    }

    const handleSort = (field) => {
        const order = (sortField === field && sortOrder === 'asc') ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);

        const sortedData = [...data].sort((a, b) => {
            if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
            return 0;
        });

        setData(sortedData);
    }

    return (
        <div className='fixed-scroll'>
            <ContentHeader title='Stack' />
            <div className="row mb-3">
                <div className="col-md-8"></div>
                <div className="col-md-4">
                    <div ref={dataRangeRef} className={`date-range-wrapper ${!showDatePicker ? "hide-date-range" : ""}`}
                        onClick={handleInputClick}>
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                            showMonthAndYearPickers={false}
                            rangeColors={['#4609AC']}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th><BiAnalyse /></th>
                                <th>Name</th>
                                <th>Course <BiSolidSortAlt onClick={() => handleSort('course')} /></th>
                                <th>ID</th>
                                <th>Purpose</th>
                                <th>Status</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(row => (
                                <tr key={row.id}>
                                    <td>
                                    <input type="checkbox" />
                                    </td>
                                    <td>
                                        {editId === row.id ? (
                                            <input
                                                value={row.name}
                                                onChange={(e) => handleChange(e, "name", row.id)}
                                                className="form-control"
                                            />
                                        ) : (
                                            row.name
                                        )}
                                    </td>
                                    <td>
                                        {editId === row.id ? (
                                            <input
                                                value={row.course}
                                                onChange={(e) => handleChange(e, "course", row.id)}
                                                className="form-control"
                                            />
                                        ) : (
                                            row.course
                                        )}
                                    </td>
                                    <td>
                                        {editId === row.id ? (
                                            <input
                                                value={row.studentId}
                                                onChange={(e) => handleChange(e, "studentId", row.id)}
                                                className="form-control"
                                            />
                                        ) : (
                                            row.studentId
                                        )}
                                    </td>
                                    <td>
                                        {editId === row.id ? (
                                            <input
                                                value={row.purpose}
                                                onChange={(e) => handleChange(e, "purpose", row.id)}
                                                className="form-control"
                                            />
                                        ) : (
                                            row.purpose
                                        )}
                                    </td>
                                    <td>
                                        {editId === row.id ? (
                                            <input
                                                value={row.status}
                                                onChange={(e) => handleChange(e, "status", row.id)}
                                                className="form-control"
                                            />
                                        ) : (
                                            row.status
                                        )}
                                    </td>
                                    <td>
                                        {editId === row.id ? (
                                            <button onClick={handleSave} className="btn btn-success"><BiMessageSquareCheck /></button>
                                        ) : (
                                            <div className='options'>
                                                <button onClick={() => handleEdit(row.id)} className='btn btn-outline-secondary'>
                                                    <BiSolidCommentEdit />
                                                </button>
                                                <button className='btn btn-outline-primary'><BiSolidCommentDetail /></button>
                                                <button className='btn btn-outline-danger'><BiSolidTrashAlt /></button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Stack;

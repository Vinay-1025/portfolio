import React, { useState, useEffect } from 'react';
import './Workplace.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentHeader from '../ContentHeader/ContentHeader';
import { BiAnalyse, BiBadgeCheck, BiCheck, BiCheckDouble, BiMessageSquareCheck, BiSelection, BiSolidCommentDetail, BiSolidCommentEdit, BiSolidSortAlt, BiSolidTrashAlt, BiTransferAlt, BiTrashAlt, BiX } from 'react-icons/bi';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Title from '../Title/Title';

const Workplace = () => {
    const [editId, setEditId] = useState(null);
    const [data, setData] = useState([
        { id: 1, name: "G Venkatesh", course: "E3-CSE", studentId: "S191070", purpose: "Outing", status: "Pending" },
        { id: 2, name: "G Vinay Sriram", course: "E4-CSE", studentId: "S191032", purpose: "Outing", status: "Pending" },
        { id: 3, name: "P Mohan", course: "E2-CSE", studentId: "S190089", purpose: "Outing", status: "Pending" },
        { id: 4, name: "K Prasanthi", course: "E3-CSE", studentId: "S190070", purpose: "Outing", status: "Pending" },
        { id: 5, name: "A Srinivas", course: "E4-CSE", studentId: "S191041", purpose: "Outing", status: "Pending" },
        { id: 6, name: "S Surya Prakash", course: "E2-CSE", studentId: "S191089", purpose: "Outing", status: "Pending" },
        // Add more rows as needed
    ]);

    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [showProgress, setShowProgress] = useState(false);
    const [progressMessage, setProgressMessage] = useState('');
    const [progress, setProgress] = useState(100);
    const [intervalId, setIntervalId] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [deletePosition, setDeletePosition] = useState({});
    const [showCheckbox, setShowCheckbox] = useState(false); // State to toggle between slider and checkbox
    const [selectedIds, setSelectedIds] = useState([]); // State to keep track of selected IDs

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
        setProgressMessage(`Sorting by ${field} in ${order} order...`);
        showProgressBar();
    }

    const handleStatusChange = (id, status) => {
        const newData = data.map(row => {
            if (row.id === id) {
                return { ...row, status: status };
            }
            return row;
        });
        setData(newData);
        setProgressMessage(`Status changed to ${status} for ID: ${id}`);
        showProgressBar();
    }

    const handleDelete = (id, e) => {
        const rect = e.target.getBoundingClientRect();
        setDeletePosition({ top: rect.top + window.scrollY, left: rect.left + window.scrollX });
        setShowDeleteConfirm(true);
        setDeleteId(id);
    }

    const confirmDelete = () => {
        const newData = data.filter(row => row.id !== deleteId);
        setData(newData);
        setShowDeleteConfirm(false);
        setDeleteId(null);
        setProgressMessage(`Deleted entry with ID: ${deleteId}`);
        showProgressBar();
    }

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
        setDeleteId(null);
    }

    const showProgressBar = () => {
        setShowProgress(true);
        setProgress(100);
        if (intervalId) {
            clearInterval(intervalId);
        }
        const newIntervalId = setInterval(() => {
            setProgress(prev => {
                if (prev <= 0) {
                    clearInterval(newIntervalId);
                    setShowProgress(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 100);
        setIntervalId(newIntervalId);
    }

    const toggleCheckBox = () => {
        setShowCheckbox(!showCheckbox);
    }

    const handleSelect = (id) => {
        setSelectedIds(prevSelectedIds =>
            prevSelectedIds.includes(id)
                ? prevSelectedIds.filter(selectedId => selectedId !== id)
                : [...prevSelectedIds, id]
        );
    }

    const handleBulkStatusChange = (status) => {
        const newData = data.map(row => {
            if (selectedIds.includes(row.id)) {
                return { ...row, status: status };
            }
            toggleCheckBox();
            return row;
        });
        setData(newData);
        setSelectedIds([]); // Clear the selected IDs after the status change
        setProgressMessage(`Status changed to ${status} for selected entries`);
        showProgressBar();
    }

    return (
        <div className='fixed-scroll'>
            <ContentHeader title='WorkPlace' />
            <Title subTitle='on day - 28-09-2024' />
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    {showCheckbox ? (
                                        <>
                                            <BiCheck onClick={() => handleBulkStatusChange('Approved')} className="check-green" />
                                            <BiX onClick={() => handleBulkStatusChange('Rejected')} className='check-red'/>
                                        </>
                                    ) : (
                                        <BiAnalyse onClick={() => toggleCheckBox()} />
                                    )}
                                </th>
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
                                        {showCheckbox ? (
                                            <input
                                                type="checkbox"
                                                checked={selectedIds.includes(row.id)}
                                                onChange={() => handleSelect(row.id)}
                                            />
                                        ) : (
                                            <div className="switch">
                                                <input
                                                    id={`switch-y-${row.id}`}
                                                    name={`tripple-${row.id}`}
                                                    type="radio"
                                                    value="Rejected"
                                                    className="switch-input"
                                                    onChange={() => handleStatusChange(row.id, 'Rejected')}
                                                />
                                                <label htmlFor={`switch-y-${row.id}`} className="switch-label switch-label-y"> <BiTrashAlt /> </label>
                                                <input
                                                    id={`switch-i-${row.id}`}
                                                    name={`tripple-${row.id}`}
                                                    type="radio"
                                                    value="Pending"
                                                    className="switch-input"
                                                    defaultChecked
                                                    onChange={() => handleStatusChange(row.id, 'Pending')}
                                                />
                                                <label htmlFor={`switch-i-${row.id}`} className="switch-label switch-label-i"> <BiTransferAlt /> </label>
                                                <input
                                                    id={`switch-n-${row.id}`}
                                                    name={`tripple-${row.id}`}
                                                    type="radio"
                                                    value="Approved"
                                                    className="switch-input"
                                                    onChange={() => handleStatusChange(row.id, 'Approved')}
                                                />
                                                <label htmlFor={`switch-n-${row.id}`} className="switch-label switch-label-n"> <BiCheckDouble /> </label>
                                                <span className="switch-selector"></span>
                                            </div>
                                        )}
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
                                                <button onClick={() => handleEdit(row.id)} className='btn btn-outline-secondary'><BiSolidCommentEdit /></button>
                                                <button className='btn btn-outline-primary'><BiSolidCommentDetail /></button>
                                                <button onClick={(e) => handleDelete(row.id, e)} className='btn btn-outline-danger'><BiSolidTrashAlt /></button>
                                                {showDeleteConfirm && deleteId === row.id && (
                                                    <div className="delete-confirmation" style={{ top: deletePosition.top, left: deletePosition.left }}>
                                                        <button onClick={confirmDelete} className="btn btn-danger conf-icon"><BiBadgeCheck className='conf-i'/></button>
                                                        <button onClick={cancelDelete} className="btn btn-secondary"><BiX className='conf-i'/></button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showProgress && (
                <div className="progress-status">
                    <div className="progress-message">{progressMessage}</div>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Workplace;

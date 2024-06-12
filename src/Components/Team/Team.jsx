// Ensure all necessary imports are present
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContentHeader from '../ContentHeader/ContentHeader'; // Ensure this path is correct

function createData(name, block, approved, rejected, total) {
    return {
        name,
        block,
        approved,
        rejected,
        total,
        history: [
            {
                Shift: 'A',
                Day: '12-10-2024',
                amount: '9 AM - 5 PM',
                ll: 5,
            },
            {
                Shift: 'B',
                Day: '12-10-2024',
                amount: '5 PM - 1 AM',
                ll: 2,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.block}</TableCell>
                <TableCell align="center">{row.approved}</TableCell>
                <TableCell align="center">{row.rejected}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Shift Timings
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Shift</TableCell>
                                        <TableCell>Day</TableCell>
                                        <TableCell align="right">Timings</TableCell>
                                        <TableCell align="right">No. of Approved</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.Shift}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.Shift}
                                            </TableCell>
                                            <TableCell>{historyRow.Day}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {historyRow.ll}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        block: PropTypes.string.isRequired,
        approved: PropTypes.number.isRequired,
        rejected: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                Shift: PropTypes.string.isRequired,
                Day: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                ll: PropTypes.number.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

const rows = [
    createData('Santha Rao', 'I1', 6, 2, 8),
    createData('Narshimha', 'I1', 9, 1, 10),
    createData('Satish', 'I2', 4, 1, 5),
    createData('Kuram Rao', 'I2', 3, 2, 5),
    createData('Suresh Kumar', 'I3', 7, 3, 10),
];

const Team = () => {
    return (
        <div className="fixed-scroll">
            <TableContainer>
                <ContentHeader title='Team' />
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow className='team-heading'>
                            <TableCell/>
                            <TableCell ><h5>Caretaker Name</h5></TableCell>
                            <TableCell align="center"><h5>Block</h5></TableCell>
                            <TableCell align="center"><h5>Approved</h5></TableCell>
                            <TableCell align="center"><h5>Rejected</h5></TableCell>
                            <TableCell align="center"><h5>Total</h5></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Team;

import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { getData } from "../../Auth/axtion"
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Header } from "../Navbar/Navbar"
import { useNavigate } from "react-router-dom"


export const HomePage = () => {
    const { flat } = useSelector((state) => state.apartment)
    console.log(flat, "homepage")

    let navigate = useNavigate()

    let dispatch = useDispatch()

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.selectedOpacity,
        },

        '&:last-child td, &:last-child th': {
            border: 0,
            
        },
    }));
    
    useEffect(() => {

        dispatch(getData())
    }, [])

    return <>
        <Header />

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Number</StyledTableCell>
                        <StyledTableCell align="center">Resident Type</StyledTableCell>
                        <StyledTableCell align="center">Flat Number</StyledTableCell>
                        <StyledTableCell align="center">Floor Number</StyledTableCell>
                        <StyledTableCell align="center">Block</StyledTableCell>
                        <StyledTableCell align="center">Number of Residents</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {flat.map((flat) => (

                        <StyledTableRow key={flat.id}>
                            <StyledTableCell align="center" component="th" scope="row" onClick={() => navigate(`/resident/${flat.id}`)}>{flat.id} </StyledTableCell>

                            <StyledTableCell align="center" component="th" scope="row"> {flat.resident_type}</StyledTableCell>
                            <StyledTableCell align="center">{flat.flat_no}</StyledTableCell>
                            <StyledTableCell align="center">{flat.flat_floor}</StyledTableCell>
                            <StyledTableCell align="center">{flat.flat_block}</StyledTableCell>
                            <StyledTableCell align="center">{(flat.residents).length}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>


        </TableContainer>


    </>
}
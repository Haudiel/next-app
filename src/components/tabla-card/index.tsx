import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, createTheme, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { groupPedidosByFolio } from '@/utils/groupPedido';
import { GroupedPedidos } from '@/services/interfaces';
import { Button } from '@chakra-ui/react';

const TablaCard = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [pedidos, setPedidos] = React.useState<GroupedPedidos>({});
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPedido, setSelectedPedido] = useState<GroupedPedidos | null>(null);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const noEmpleado = localStorage.getItem('noEmpleado')
                const response = await axios.get(`https://localhost:7063/AdminUser/ObtainSolicitud?emplid=${noEmpleado}`);
                console.log(response.data)
                const groupedPedidos = groupPedidosByFolio(response.data);
                setPedidos(groupedPedidos)
                console.log(groupedPedidos)
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };

        fetchData();
    }, []);

    const handleOpenModal = (pedido: GroupedPedidos) => {
        setSelectedPedido(pedido);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedPedido(null);
        setIsOpen(false);
    };

    return (
        <ThemeProvider theme={createTheme({})}>
            <div>
                {Object.keys(pedidos).map((folioPedido) => (
                    <Accordion key={folioPedido}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Folio Pedido: {folioPedido}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow >
                                            <TableCell>No. Parte</TableCell>
                                            <TableCell>Marca</TableCell>
                                            <TableCell>Descripcion</TableCell>
                                            <TableCell>Frecuencia de cambio (dias)</TableCell>
                                            <TableCell>Cantidad</TableCell>
                                            <TableCell>Acciones</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {pedidos[folioPedido].map((pedido, index) => (
                                            <TableRow key={index} hover >
                                                <TableCell>{pedido.noParteFabricante}</TableCell>
                                                <TableCell>{pedido.marca}</TableCell>
                                                <TableCell>{pedido.descripcion}</TableCell>
                                                <TableCell>{pedido.frecuenciaCambio}</TableCell>
                                                <TableCell>{pedido.cantidad}</TableCell>
                                                <TableCell><Button>Editar</Button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </ThemeProvider>
    );
}

export default TablaCard
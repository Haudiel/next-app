import React, { useCallback, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import {
    MaterialReactTable,
    type MaterialReactTableProps,
    type MRT_Cell,
    type MRT_ColumnDef,
    type MRT_Row,
} from 'material-react-table';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { dataSolicitud } from './exampleSolicitud';

export type Solicitud = {
    nombreSolicitante: string;
    departamento: string;
    critico: string;
    noParteFabricante: string;
    marca: string;
    descripcion: string;
    frecuenciaCambio: number;
    cantidad: number;
    fechaSolicitud: string;
    fechaVencimiento: string;
    lineaEstacion: string;
    justificacionAlta: string;
    folioPedido: string;
    compradorAsignado: string;
    tipoDeProyecto: string;
    documentoPDF: string;
}

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    state: string;
};

const TablaSolicitud = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState<Solicitud[]>(() => dataSolicitud);
    const [validationErrors, setValidationErrors] = useState<{
        [cellId: string]: string;
    }>({});

    const handleCreateNewRow = (values: Solicitud) => {
        tableData.push(values);
        setTableData([...tableData]);
    }

    const handleSaveRowEdits: MaterialReactTableProps<Solicitud>['onEditingRowSave'] =
        async ({ exitEditingMode, row, values }) => {
            if (!Object.keys(validationErrors).length) {
                tableData[row.index] = values;

                setTableData([...tableData]);
                exitEditingMode();
            }
        }

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    }

    const handleDeleteRow = useCallback(
        (row: MRT_Row<Solicitud>) => {
            if (
                !confirm(`Are you sure you want to delete ${row.getValue('folioPedido')}`)
            ) {
                return;
            }
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData],
    );

    const getCommonEditTextFieldProps = useCallback(
        (
            cell: MRT_Cell<Solicitud>,
        ): MRT_ColumnDef<Solicitud>['muiTableBodyCellEditTextFieldProps'] => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'email'
                            ? validateEmail(event.target.value)
                            : cell.column.id === 'age'
                                ? validateAge(+event.target.value)
                                : validateRequired(event.target.value)
                    if (!isValid) {
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} is required`,
                        });
                    } else {
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors,
                        });
                    }
                }
            }
        },
        [validationErrors]
    );

    const columns = useMemo<MRT_ColumnDef<Solicitud>[]>(
        () => [
            {
                accessorKey: 'critico',
                header: 'Critico',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'noParteFabricante',
                header: 'Número de parte',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'marca',
                header: 'Marca',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'descripcion',
                header: 'Descripcion',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'frecuenciaCambio',
                header: 'Frecuencia de cambio',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'number'
                }),
            },
            {
                accessorKey: 'cantidad',
                header: 'Cantidad',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'number'
                }),
            },
            {
                accessorKey: 'lineaEstacion',
                header: 'Linea o Estacion',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'justificacionAlta',
                header: 'Justificacion de la alta',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'documentoPDF',
                header: 'Doumento PDF',
                size: 120,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
        ],
        [getCommonEditTextFieldProps]
    );

    return (
        <>
            <ThemeProvider theme={createTheme({})}>
                <MaterialReactTable
                    displayColumnDefOptions={{
                        'mrt-row-actions': {
                            muiTableHeadCellProps: {
                                align: 'center',
                            },
                            size: 70,
                        },
                    }}
                    columns={columns}
                    data={tableData}
                    editingMode='modal'
                    enableColumnOrdering
                    enableEditing
                    onEditingRowSave={handleSaveRowEdits}
                    onEditingRowCancel={handleCancelRowEdits}
                    renderRowActions={({ row, table }) => (
                        <Box sx={{ display: 'flex', gap: '1rem' }}>
                            <Tooltip arrow placement="left" title="Edit">
                                <IconButton onClick={() => table.setEditingRow(row)}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <Tooltip arrow placement="right" title="Delete">
                                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )}
                    renderTopToolbarCustomActions={() => (
                        <Button
                            color="error"
                            onClick={() => setCreateModalOpen(true)}
                            variant="contained"
                        >
                            Agregar Material
                        </Button>
                    )}
                />
                <CreateNewAccountModal
                    columns={columns}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}
                />
            </ThemeProvider>
        </>
    );
};

interface CreateModalProps {
    columns: MRT_ColumnDef<Solicitud>[];
    onClose: () => void;
    onSubmit: (values: Solicitud) => void;
    open: boolean;
}

export const CreateNewAccountModal = ({
    open,
    columns,
    onClose,
    onSubmit,
}: CreateModalProps) => {
    const [values, setValues] = useState<any>(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {} as any),
    );

    const handleSubmit = () => {
        //put your validation logic here
        onSubmit(values);
        onClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Agregar Material</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        {columns.map((column) => (
                            <TextField
                                key={column.accessorKey}
                                label={column.header}
                                name={column.accessorKey}
                                onChange={(e) =>
                                    setValues({ ...values, [e.target.name]: e.target.value })
                                }
                            />
                        ))}
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="error" onClick={handleSubmit} variant="contained">
                    Agregar Material
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
const validateAge = (age: number) => age >= 18 && age <= 50;


export default TablaSolicitud;

import { MRT_Cell, MRT_ColumnDef, MRT_Row, MaterialReactTable, MaterialReactTableProps } from "material-react-table";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, MenuItem, Stack, TextField, ThemeProvider, Tooltip, createTheme } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { MuiFileInput } from "mui-file-input";
import { dataSolicitud, type Solicitud } from "./exampleSolicitud";
import { Edit, Delete, AttachFileOutlined } from "@mui/icons-material";

interface CreateModalProps {
    columns: MRT_ColumnDef<Solicitud>[];
    onClose: () => void;
    onSubmit: (values: Solicitud) => void;
    open: boolean;
}

export const CreateNewSolicitudModal = ({
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
    const [fileName, setFileName] = useState<string>('');

    const handleSubmit = () => {
        //put your validation logic here
        onSubmit(values);
        onClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign='center'>Agregar material</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        <TextField
                            id="outlined-select-currency"
                            key='critico'
                            name='critico'
                            select
                            label="Critico"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        >
                            <MenuItem value='SI'>SI</MenuItem>
                            <MenuItem value='NO'>NO</MenuItem>
                        </TextField>
                        <TextField
                            key='noParteFabricante'
                            name='noParteFabricante'
                            required
                            id="outlined-required"
                            label="Número de parte"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        />
                        <TextField
                            required
                            key='marca'
                            name='marca'
                            id="outlined-required"
                            label="Marca"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        />
                        <TextField
                            required
                            key='descripcion'
                            name='descripcion'
                            id="outlined-required"
                            label="Descripción"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        />
                        <TextField
                            id="outlined-number"
                            key='frecuenciaCambio'
                            name='frecuenciaCambio'
                            label="Frecuencia de cambio"
                            type="number"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        />
                        <TextField
                            id="outlined-number"
                            key='cantidad'
                            name='cantidad'
                            label="Cantidad"
                            type="number"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        />
                        <TextField
                            required
                            key='lineaEstacion'
                            name='lineaEstacion'
                            id="outlined-required"
                            label="Linea o estación"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        />
                        <TextField
                            required
                            key='justificacionAlta'
                            name='justificacionAlta'
                            id="outlined-required"
                            label="Justificación de la alta"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        />
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
    )
}

interface FileInputModalProps {
    open: boolean;
    onClose: () => void;
}

const FileInput = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);

    const handleOpenModal = () => {
        setCreateModalOpen(true);
    };

    const handleCloseModal = () => {
        setCreateModalOpen(false);
    };

    return (
        <>
            <IconButton onClick={handleOpenModal}>
                <AttachFileOutlined />
            </IconButton>
            <FileInputModal open={createModalOpen} onClose={handleCloseModal} />
        </>
    )
}

const FileInputModal: React.FC<FileInputModalProps> = ({ open, onClose }) => {
    const [value1, setValue1] = React.useState<File | null>(null);
    const [value2, setValue2] = React.useState<File | null>(null);
    const [value3, setValue3] = React.useState<File | null>(null);

    const handleChange1 = (newValue: File | null) => {
        setValue1(newValue);
    };

    const handleChange2 = (newValue: File | null) => {
        setValue2(newValue);
    };

    const handleChange3 = (newValue: File | null) => {
        setValue3(newValue);
    };

    return (

        <Dialog open={open} onClose={onClose}>
            <DialogTitle textAlign='center'>Agregar documentos</DialogTitle>
            <DialogContent>
                <form >
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        <MuiFileInput
                            value={value1}
                            key='documentoPDF1'
                            name='documentoPDF1'
                            variant='outlined'
                            onChange={handleChange1}
                        />
                        <MuiFileInput
                            value={value2}
                            key='documentoPDF2'
                            name='documentoPDF2'
                            variant='outlined'
                            onChange={handleChange2}
                        />
                        <MuiFileInput
                            value={value3}
                            key='documentoPDF3'
                            name='documentoPDF3'
                            variant='outlined'
                            onChange={handleChange3}
                        />
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="error" variant="contained">
                    Agregar PDF
                </Button>
            </DialogActions>
        </Dialog>
    )
}

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

    const validateRequired = (value: string) => !!value.length;
    const validateEmail = (email: string) =>
        !!email.length &&
        email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    const validateAge = (age: number) => age >= 18 && age <= 50;

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
            },
            {
                accessorKey: 'noParteFabricante',
                header: 'Número de parte',
                size: 120,
            },
            {
                accessorKey: 'marca',
                header: 'Marca',
                size: 120,
            },
            {
                accessorKey: 'descripcion',
                header: 'Descripcion',
                size: 120,
            },
            {
                accessorKey: 'frecuenciaCambio',
                header: 'Frecuencia de cambio',
                size: 120,
                type: 'number'
            },
            {
                accessorKey: 'cantidad',
                header: 'Cantidad',
                size: 120,
            },
            {
                accessorKey: 'lineaEstacion',
                header: 'Linea o Estacion',
                size: 120,
            },
            {
                accessorKey: 'justificacionAlta',
                header: 'Justificacion de la alta',
                size: 120,
            },
            {
                accessorKey: 'documentoPDF',
                header: 'PDF',
                size: 120,
                Cell: FileInput

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
                        }
                    }}
                    columns={columns}
                    data={tableData}
                    editingMode='modal'
                    enableColumnOrdering
                    enableEditing
                    onEditingRowSave={handleSaveRowEdits}
                    onEditingCellChange={handleCancelRowEdits}
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
                <CreateNewSolicitudModal
                    columns={columns}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}
                />
            </ThemeProvider>
        </>
    )
}

export default TablaSolicitud

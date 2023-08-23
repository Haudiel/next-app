import { MRT_Cell, MRT_ColumnDef, MRT_Row, MaterialReactTable, MaterialReactTableProps } from "material-react-table";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, MenuItem, Stack, TextField, ThemeProvider, Tooltip, createTheme } from "@mui/material";
import React, { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import { Button as ChakraButton, ChakraProvider, Text, chakra, Select } from '@chakra-ui/react';
import { dataSolicitud, type Solicitud } from "./exampleSolicitud";
import { Edit, Delete, AttachFileOutlined } from "@mui/icons-material";
import { generateFolio } from "@/utils/folio";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const TablaSolicitud = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState<Solicitud[]>(() => dataSolicitud);
    const [validationErrors, setValidationErrors] = useState<{
        [cellId: string]: string;
    }>({});
    const folio = generateFolio();

    const handleCreateNewRow = (values: Solicitud) => {
        tableData.push(values);
        setTableData([...tableData]);
        console.log(tableData)
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
                Cell: CustomFileInput

            },
        ],
        [getCommonEditTextFieldProps]
    );

    return (
        <>
            <ThemeProvider theme={createTheme({})}>
                <ChakraProvider>
                    <chakra.div
                        pb={2}
                    >
                        <Stack
                            bgcolor='white'
                            p={2}
                            boxShadow='md'
                        >
                            <chakra.div
                                display='flex'
                                justifyContent='space-between'
                            >
                                <chakra.div>
                                    <Text
                                        fontSize='lg'
                                    >
                                        Folio: {folio}
                                    </Text>
                                    <ThemeProvider theme={createTheme({})}>
                                        <chakra.div
                                            display='flex' 
                                            justifyContent='center'
                                        >
                                            <Text
                                                fontSize='lg'
                                            >
                                                Fecha de vencimiento:
                                            </Text>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker />
                                            </LocalizationProvider>
                                        </chakra.div>
                                    </ThemeProvider>
                                </chakra.div>
                                <chakra.div width={500} display='flex' justifyContent='center'>
                                    <Text p={3}>
                                        Seleccionar Compador:
                                    </Text>
                                    <Select maxW={300} variant='outline' size='lg' placeholder="Asignar comprador" >
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </chakra.div>
                                {/* <chakra.input
                                    display='none'
                                    type='file'
                                ></chakra.input> */}
                            </chakra.div>
                        </Stack>
                    </chakra.div>
                </ChakraProvider>
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
                <ChakraProvider>
                    <chakra.div
                        display='flex'
                        justifyContent='flex-end'
                        p={3}
                    >
                        <ChakraButton
                            colorScheme='red'
                            size='md'
                        >
                            Submit
                        </ChakraButton>
                    </chakra.div>
                </ChakraProvider>
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

const insertarSolicitud = () => {
    const apiUrl = ''

    
}

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

    const handleSubmit = () => {
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

const CustomFileInput = () => {
    const [fileList, setFileList] = useState<FileList | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileList(e.target.files);
    };

    const handleUploadClick = () => {
        inputRef.current?.click();
        if (!fileList) {
            return;
        }

        // 👇 Create new FormData object and append files
        const data = new FormData();
        files.forEach((file, i) => {
            data.append(`file-${i}`, file, file.name);
        });

    };
    const files = fileList ? [...fileList] : [];

    return (
        <>

            <IconButton onClick={handleUploadClick}>
                <AttachFileOutlined />
            </IconButton>
            <div>
                {/* 👇 Notice the `display: hidden` on the input */}
                <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    multiple
                />
                <Text>
                    {files.length} archivos seleccionados
                </Text>
            </div>
        </>
    );
}



export default TablaSolicitud

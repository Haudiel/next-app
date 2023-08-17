import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import {
    MaterialReactTable,
    type MRT_Cell,
    type MRT_ColumnDef,
} from 'material-react-table';
import { dataSolicitud, type Solicitud } from './dataSolicitud';
import { MuiFileInput } from 'mui-file-input';

const Example = () => {
    const columns = useMemo<MRT_ColumnDef<Solicitud>[]>(
        () => [
            //column definitions...
            {
                accessorKey: 'critico',
                header: 'Critico',
            },
            {
                accessorKey: 'noParteFabricante',
                header: 'Número de parte',
            },
            {
                accessorKey: 'marca',
                header: 'Marca',
            },
            {
                accessorKey: 'descripción',
                header: 'Descripcion',
            },
            {
                accessorKey: 'frecuenciaCambio',
                header: 'Frecuencia de cambio',
            },
            {
                accessorKey: 'cantidad',
                header: 'Cantidad',
            },
            {
                accessorKey: 'lineaEstacion',
                header: 'Linea o Estacion',
            },
            {
                accessorKey: 'justificacionAlta',
                header: 'Justificacion de la alta',
            },
            {
                accessorKey: 'documentoPDF',
                header: 'Doumento PDF',
                Cell: FileInput
            },
        ],
        [],
    );

    const [tableData, setTableData] = useState<Solicitud[]>(() => dataSolicitud);

    const handleSaveCell = (cell: MRT_Cell<Solicitud>, value: any) => {
        //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
        tableData[cell.row.index][cell.column.id as keyof Solicitud] = value;
        //send/receive api updates here
        setTableData([...tableData]); //re-render with new data
    };

    return (
        <ThemeProvider theme={createTheme({})}>

            <MaterialReactTable
                columns={columns}
                data={tableData}
                editingMode="table"
                enableEditing
                muiTableBodyCellEditTextFieldProps={({ cell }) => ({
                    //onBlur is more efficient, but could use onChange instead
                    onBlur: (event) => {
                        handleSaveCell(cell, event.target.value);
                    },
                    variant: 'standard',
                })}
            />
        </ThemeProvider>
    );
};

const FileInput = () => {
    const [value, setValue] = React.useState(null)
  
    const handleChange = (newValue: any) => {
      setValue(newValue)
    }
  
    return <MuiFileInput value={value} onChange={handleChange} />
  }

export default Example;
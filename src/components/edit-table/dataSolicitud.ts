export type Solicitud = {
    nombreSolicitante: string;
    departamento: string;
    critico: string;
    noParteFabricante: string;
    marca: string;
    descripción: string;
    frecuenciaCambio: string;
    cantidad: string;
    fechaSolicitud: string;
    fechaVencimiento: string;
    lineaEstacion: string;
    justificacionAlta: string;
    folioPedido: string;
    compradorAsignado: string;
    tipoDeProyecto: string;
    documentoPDF: string;
}

export const dataSolicitud: Solicitud[] = [
    {
        nombreSolicitante: 'Héctor Haudiel Orozco Duarte',
        departamento: 'Sistemas',
        critico: 'NO',
        noParteFabricante: 'F2A3AD852C2',
        marca: 'TotalPlay',
        descripción: 'Internet max velocidad',
        frecuenciaCambio: '90',
        cantidad: '5',
        fechaSolicitud: 'HOY',
        fechaVencimiento: 'MAÑANA',
        lineaEstacion: '852KMTHW',
        justificacionAlta: 'Se necesita el interweb',
        folioPedido: '202317080810',
        compradorAsignado: 'Christian Rivera',
        tipoDeProyecto: 'Asignacion',
        documentoPDF: 'PDF'
    }
]
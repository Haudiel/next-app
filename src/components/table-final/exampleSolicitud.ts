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

export const dataSolicitud: Solicitud[] = [
    {
        nombreSolicitante: 'OROZCO DUARTE , HECTOR HAUDIEL',
        departamento: 'INGENIRIA DE PLANTA',
        critico: 'NO',
        noParteFabricante: '4E0304.0',
        marca: 'KAESER',
        descripcion: 'KIT cartucho filtro aire Ø420x305mm',
        frecuenciaCambio: 180,
        cantidad: 2,
        fechaSolicitud: '',
        fechaVencimiento: '',
        lineaEstacion: 'EN CUARTO MECANICO GENERAL DE INGENIRIA DE PLANTA.',
        justificacionAlta: 'REFACCIONES DE PARA EQUIPO CRITICO,  SU PARO AFECTA LA OPERACIÓN DEL AREA PRODUCTIVA EN GENERAL.',
        folioPedido: '202317080810',
        compradorAsignado: '',
        tipoDeProyecto: 'Asignacion',
        documentoPDF: ''
    },
    {
        nombreSolicitante: 'OROZCO DUARTE , HECTOR HAUDIEL',
        departamento: 'INGENIRIA DE PLANTA',
        critico: 'NO',
        noParteFabricante: '6.4693.0',
        marca: 'KAESER',
        descripcion: 'Elemento filtrante de aceite 398mm',
        frecuenciaCambio: 180,
        cantidad: 6,
        fechaSolicitud: '',
        fechaVencimiento: '',
        lineaEstacion: 'EN CUARTO MECANICO GENERAL DE INGENIRIA DE PLANTA.',
        justificacionAlta: 'REFACCIONES DE PARA EQUIPO CRITICO,  SU PARO AFECTA LA OPERACIÓN DEL AREA PRODUCTIVA EN GENERAL.',
        folioPedido: '202317080810',
        compradorAsignado: '',
        tipoDeProyecto: 'Asignacion',
        documentoPDF: ''
    },
    {
        nombreSolicitante: 'OROZCO DUARTE , HECTOR HAUDIEL',
        departamento: 'INGENIRIA DE PLANTA',
        critico: 'NO',
        noParteFabricante: '7.4519.0',
        marca: 'KAESER',
        descripcion: 'Esterilla filtrante 170x170x10',
        frecuenciaCambio: 180,
        cantidad: 4,
        fechaSolicitud: '',
        fechaVencimiento: '',
        lineaEstacion: 'EN CUARTO MECANICO GENERAL DE INGENIRIA DE PLANTA.',
        justificacionAlta: 'REFACCIONES DE PARA EQUIPO CRITICO,  SU PARO AFECTA LA OPERACIÓN DEL AREA PRODUCTIVA EN GENERAL.',
        folioPedido: '202317080810',
        compradorAsignado: '',
        tipoDeProyecto: 'Asignacion',
        documentoPDF: ''
    }
]
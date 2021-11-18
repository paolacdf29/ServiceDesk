export interface reclamo{
    id_reclamo:     number;
    id_cliente:     number;
    Id_empleado:    number;
    id_sucursal:    number;
    fecha_cierre:   string;
    detalle:        string;
    fecha_creac:    string;
    estado:         number;
    prioridad:      number;
}

export interface cliente {
    id_cliente: number;
    id_sucursal:number;
    cuit:       number;
    razon_soc:  string;
    contacto:   string;
    telefono:   number;
    email:      string;
    usuario:    string;
    contrasena: string;
}
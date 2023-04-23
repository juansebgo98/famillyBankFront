import { TipoMovimiento } from "../Enum/TipoMovimiento";
import { Categoria } from "./categoria";
import { Cuenta } from "./cuenta";
import { CuentaAhorro } from "./cuentaAhorro";
import { Tarjeta } from "./tarjeta";
import { Usuario } from "./usuario";

export class Movimiento {
    id: number;
    fecha: Date;
    cantidad: number;
    tipo: TipoMovimiento;
    concepto: string;
    saldoActual: number;
    categoria: Categoria;
    cuenta: Cuenta;
    cuentaAhorro: CuentaAhorro;
    tarjeta: Tarjeta;
    usuario: Usuario;

    constructor(id: number,
        fecha: Date,
        cantidad: number,
        tipo: TipoMovimiento,
        concepto: string,
        saldoActual: number,
        categoria: Categoria,
        cuenta: Cuenta,
        cuentaAhorro: CuentaAhorro,
        tarjeta: Tarjeta,
        usuario: Usuario) {
            this.id = id;
            this.fecha = fecha;
            this.cantidad = cantidad;
            this.tipo = tipo;
            this.concepto = concepto;
            this.saldoActual = saldoActual;
            this.categoria = categoria;
            this.cuenta = cuenta;
            this.cuentaAhorro = cuentaAhorro;
            this.tarjeta = tarjeta;
            this.usuario = usuario;
    }
}

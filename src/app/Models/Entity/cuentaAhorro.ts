import { Cuenta } from "./cuenta";
import { Movimiento } from "./movimiento";

export class CuentaAhorro {
    id: number;
    nombre: string;
    saldo: number;
    cuenta: Cuenta;
    movimientos: Movimiento[];

    constructor(id: number,
                nombre: string,
                saldo: number,
                cuenta: Cuenta,
                movimientos: Movimiento[]){
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
        this.cuenta = cuenta;
        this.movimientos = movimientos;
    }
}

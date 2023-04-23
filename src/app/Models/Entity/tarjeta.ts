import { Cuenta } from "./cuenta";
import { Movimiento } from "./movimiento";

export class Tarjeta {
    id: number;
    numero: number;
    cuenta: Cuenta;
    movimientos: Movimiento[];

    constructor(id: number,
        numero: number,
        cuenta: Cuenta,
        movimientos: Movimiento[]){
            this.id=id;
            this.numero=numero;
            this.cuenta = cuenta;
            this.movimientos=movimientos;
        }
}
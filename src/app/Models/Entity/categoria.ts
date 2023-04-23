import { Movimiento } from "./movimiento";

export class Categoria {
    id: number;
    nombre: string;
    movimientos: Movimiento[];

    constructor(id: number,nombre: string, movimientos: Movimiento[]) {
        this.id =id;
        this.nombre = nombre;
        this.movimientos = movimientos;
    }
}

import { CuentaAhorro } from "./cuentaAhorro";
import { Movimiento } from "./movimiento";
import { Tarjeta } from "./tarjeta";
import { Usuario } from "./usuario";
import { UsuarioCuenta } from "./usuarioCuenta";

export class Cuenta {
    id: number;
    iban: string;
    saldo: number;
    usuarioPrincipal: Usuario;
    listaCuentaAhorro: CuentaAhorro[];
    usuarios: UsuarioCuenta[];
    movimientos: Movimiento[];
    tarjetas: Tarjeta[];

    constructor(id: number,
        iban: string,
        saldo: number,
        usuarioPrincipal: Usuario,
        listaCuentaAhorro: CuentaAhorro[],
        usuarios: UsuarioCuenta[],
        movimientos: Movimiento[],
        tarjetas: Tarjeta[]){
            this.id = id;
            this.iban = iban;
            this.saldo = saldo;
            this.usuarioPrincipal = usuarioPrincipal;
            this.listaCuentaAhorro = listaCuentaAhorro;
            this.usuarios = usuarios;
            this.movimientos = movimientos;
            this.tarjetas = tarjetas;
        }

}
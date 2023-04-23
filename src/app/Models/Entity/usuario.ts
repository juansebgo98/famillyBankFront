import { Cuenta } from "./cuenta";
import { Movimiento } from "./movimiento";
import { Role } from "./role";
import { UsuarioCuenta } from "./usuarioCuenta";

export class Usuario {
    id: number;
    username: string;
    nombreCompleto: string;
    nombreCorto: string;
    image: string;
    email: string;
    resetearPassword: boolean;
    password: string;
    cuentasPrincipales: Cuenta[];
    cuentas: UsuarioCuenta[];
    movimientos: Movimiento[];
    roles: Role[];

    constructor(
        id: number,
        username: string,
        nombreCompleto: string,
        nombreCorto: string,
        image: string,
        email: string,
        resetearPassword: boolean,
        password: string,
        cuentasPrincipales: Cuenta[],
        cuentas: UsuarioCuenta[],
        movimientos: Movimiento[],
        roles: Role[]
    ) {
        this.id = id;
        this.username = username;
        this.nombreCompleto = nombreCompleto;
        this.nombreCorto = nombreCorto;
        this.image = image;
        this.email = email;
        this.resetearPassword = resetearPassword;
        this.password = password;
        this.cuentasPrincipales = cuentasPrincipales;
        this.cuentas = cuentas;
        this.movimientos = movimientos;
        this.roles = roles;
    }
}

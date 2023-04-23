import { TipoUsuarioCuenta } from "../Enum/TipoUsuarioCuenta";

export class UsuarioCuenta {
    id: TipoUsuarioCuenta;
    saldoEnCuenta: number;
    tipoUsuarioCuenta: TipoUsuarioCuenta;
    
    constructor(id:TipoUsuarioCuenta, saldoEnCuenta:number,tipoUsuarioCuenta:TipoUsuarioCuenta){
        this.id=id;
        this.saldoEnCuenta=saldoEnCuenta;
        this.tipoUsuarioCuenta=tipoUsuarioCuenta;
    }
}
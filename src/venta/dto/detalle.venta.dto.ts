import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";


export class DetalleVenta{
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(10000)
    totalVenta: number;

    @IsNumber()
    @IsNotEmpty()
    cveUsuario:number;

    @IsNotEmpty()
    productosVentas: ProductoVenta[];

    
}

export class ProductoVenta{
    
    @IsNotEmpty()
    cveProducto: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(10000)
    cantidad: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(10000)
    precioProducto:number;

    cveVenta: number = 0;
}
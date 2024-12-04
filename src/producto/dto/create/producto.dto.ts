import { IsNotEmpty, IsString, IsInt, IsPositive, IsNumber, IsBoolean, Min, Max } from "class-validator";

export class ProductoDto {
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsInt()
    @IsNotEmpty()
    @Min(1) 
    cantidad: number;

    @IsNumber()
    @IsPositive() 
    @IsNotEmpty()
    @Min(0.01)
    @Max(10000)
    precio: number;

    @IsInt()
    @IsNotEmpty()
    cveCategoria: number;
    
}

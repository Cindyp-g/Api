import { PrismaService } from 'src/prisma.service';
import { ProductoVenta } from './dto/detalle.venta.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VentaService {
  autocompleteProductos: any;

  constructor(private prismaSvc: PrismaService) { }

 async guardarVenta(totalVenta: number, cveUsuario: number){
    return await this.prismaSvc.venta.create({
      data: {
        totalVenta: totalVenta,
        cveUsuario: cveUsuario
      }
    });
  }

   async guardarDetalleventa( productos: ProductoVenta[]){
    return await this.prismaSvc.detalleVenta.createMany({
        data: productos,
        skipDuplicates:true
    })

   }
}

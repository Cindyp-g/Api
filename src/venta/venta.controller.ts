import { Body, Controller, Post } from '@nestjs/common';
import { DetalleVenta } from './dto/detalle.venta.dto';
import { VentaService } from './venta.service';

@Controller('api/venta')
export class VentaController {
    constructor (private ventaSvc: VentaService){}
    @Post()
    async guardarVenta(@Body() detalleVenta: DetalleVenta){
        //generar la venta
        var venta = await this.ventaSvc.guardarVenta(detalleVenta.totalVenta, detalleVenta.cveUsuario)

        for (let pv of detalleVenta.productosVentas){
            pv.cveVenta = venta.cveVenta;
        }
        return await this.ventaSvc.guardarDetalleventa(detalleVenta.productosVentas);
    }

}

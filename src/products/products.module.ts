import { Module } from '@nestjs/common';
import {ProductsController} from './products.controller';
import {ProductsService} from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product])], // Importamos el módulo TypeOrmModule y le pasamos la entidad Products
    controllers: [ProductsController],
    providers: [ProductsService] // Proveedor del servicio ProductsService
})
export class ProductsModule {}

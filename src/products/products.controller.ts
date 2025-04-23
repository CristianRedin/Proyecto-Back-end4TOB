import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { Product } from './products.entity'; // Cambio a singular para coincidir con el nombre del archivo y la clase

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get() // Endpoint para obtener todos los productos
  findAll(): Promise<Product[]> {  // Cambio de 'Products' a 'Product'
    return this.productsService.findAll();
  }

  @Get(':id') // Endpoint para obtener un producto por su id
  async findOne(@Param('id') id: number): Promise<Product> {  // Cambio de 'Products' a 'Product'
    return this.productsService.findOne(id);
  }

  @Post() // Endpoint para crear un nuevo producto
  createProduct(@Body() product: Product): Promise<Product> {  // Cambio de 'Products' a 'Product'
    return this.productsService.create(product);
  }

  @Delete(':id') // Endpoint para eliminar un producto por su id
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productsService.delete(id);
  }

  @Put(':id') // Endpoint para actualizar un producto por su id
  async updateProduct(@Param('id') id: number, @Body() product: Partial<Product>): Promise<Product> {  // Cambio de 'Products' a 'Product'
    return this.productsService.update(id, product);
  }

  @Patch(':id') // Endpoint para actualizar parcialmente un producto por su id
  async partialUpdateProduct(@Param('id') id: number, @Body() product: Partial<Product>): Promise<Product> {  // Cambio de 'Products' a 'Product'
    return this.productsService.update(id, product);
  }
}

import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {} // Inyectamos el servicio de UsersService
     @Get() // Endpoint para obtener todos los usuarios
     findAll(): Promise<User[]> {
         return this.usersService.findAll();
     }
    
     @Get(':id') // Endpoint para obtener un usuario por su id
     findOne(@Param('id', ParseIntPipe) id: number): Promise<User | null> {
         return this.usersService.findOne(id);
     }
    
     @Post() // Endpoint para crear un nuevo usuario
     createUser(@Body() user: User): Promise<User> {
     return this.usersService.create(user);
    }


}

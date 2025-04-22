import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) // Inyectamos el repositorio de User
        private usersRepository: Repository<User>,) {} 
        
        findAll(): Promise<User[]> {
            return this.usersRepository.find(); // Devuelve todos los usuarios
        }
         async findOne(id: number): Promise<User | null> {
            const user= await this.usersRepository.findOneBy({id});
       if(!user){
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
       }
       return user; // Devuelve un usuario por su id  
        }    

        create(user: User): Promise<User> {
            return this.usersRepository.save(user); // Guarda un nuevo usuario
        }
}

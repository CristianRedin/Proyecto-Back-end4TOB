import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';    


@Entity()
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: number; //agregar despues UUIDV4
    
    @Column({ unique: true })
    name:string;

    @Column({ unique: true })
    email:string;

    @Column({ unique: true })
    birthay:Date;

    @Column({ unique: true })
    identification:number;



}
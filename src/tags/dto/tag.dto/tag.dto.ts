import { IsInt, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class TagDto {
    @IsString()
    @MaxLength(30)
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
        {message: 'El nombre solo debe contener letras y espacios',
    })
        name: string;
    
    @IsString()
    @MaxLength(100)
    @MinLength(0 , {message: 'La descripción no puede estar vacía'})    
    description: string;

    @IsString()
    @MinLength(0 , {message: 'El slug no puede estar vacío'})
    @MaxLength(100) 
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
        {message: 'El nombre solo debe contener letras y espacios',
    })
    slug?: string;

    @IsInt({ message: 'El stock debe de ser un número entero' })
@Min(0, { message: 'El stock debe ser 0 o más'})
stock: number;
    

}
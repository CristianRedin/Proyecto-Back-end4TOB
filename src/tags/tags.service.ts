import { Body, Injectable, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TagDto } from './dto/tag.dto/tag.dto';
import { Tag } from './tag/tag.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TagsService {
   
    private tags: Tag[] = [];

   getId(id: string): Tag {
        const tag = this.tags.find((tags) => tag.id === id);
    if(!tag){
        throw new Error(`Tag with id ${id} not found`);
    } 
    return tag;
}    
     

    async insert(tagDto:TagDto): Promise<Tag> {

        const tag:Tag = {
            id:uuidv4(),
            name:tagDto.name,
            description:tagDto.description,
            slug:tagDto.slug,
            stock:tagDto.stock,
        };
        this.tags.push(tag);
        return tag;
}}


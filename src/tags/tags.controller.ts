import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TagDto } from './dto/tag.dto/tag.dto';
import { Tag } from './tag/tag.interface';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    //Uso de Get en errores
    @Get(':id')
async find(@Param('id') id: string) {
  console.log(id, typeof id);
  return this.tagsService.getId(id);
}
    //Uso de validaciones Pipe
    @Post()
@UsePipes(new ValidationPipe())
post(@Body() body: TagDto): Tag {
  return this.tagsService.insert(body);
}}

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schemas';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @UsePipes(new ValidationPipe())
  @Post('create')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
  @Get('all')
  findAll(): Promise<UserDocument[]> {
  return this.usersService.findAll();
}
  @Put(':id') 
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserDocument> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<UserDocument> {
    return this.usersService.remove(id);
  }
}

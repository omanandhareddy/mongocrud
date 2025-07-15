import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schemas';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save(); 
  }
   async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }  
  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    if (!updatedUser) {
      throw new Error(`User with id ${id} not found`);
    }
    return updatedUser;
  }

  async remove(id: string): Promise<UserDocument> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new Error(`User with id ${id} not found`);
    }
    return deletedUser;
  }
  }




import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Somke:dz24NWIBJqi9Qxfu@cluster17.doa7tos.mongodb.net/mydata?retryWrites=true&w=majority&appName=Cluster17'),
    UserModule,
  ],
})
export class AppModule {}

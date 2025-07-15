import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { LoggerMiddleware } from './user-logger/user-logger.middleware';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Somke:dz24NWIBJqi9Qxfu@cluster17.doa7tos.mongodb.net/mydata?retryWrites=true&w=majority&appName=Cluster17'),
    UserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}

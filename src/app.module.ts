import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { RateLimitMiddleware } from './api-limit/api-limit.middleware';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      }),
      MongooseModule.forRootAsync({
      useFactory: () => ({
      uri: process.env.MONGO_URI,
      }),
      }),
    UserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RateLimitMiddleware).forRoutes('users');
  }
}

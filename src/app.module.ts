import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { configService } from './config/config.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRoot(configService.getMongoConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

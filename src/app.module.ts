import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GeneModule } from './modules/gene/gene.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    GeneModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GeneController } from './controllers/gene.controller';
import { GeneService } from './services/gene.service';
import { EnsembleService } from './providers/ensembl.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GeneController],
  providers: [GeneService, EnsembleService],
})
export class GeneModule {}

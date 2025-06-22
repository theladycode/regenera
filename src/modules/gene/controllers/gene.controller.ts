import { Controller, Get, Param } from '@nestjs/common';
import { GeneResponse } from '../interfaces/gene-response.interface';
import { GeneService } from '../services/gene.service';

@Controller('genes')
export class GeneController {
  constructor(private readonly geneService: GeneService) {}

  @Get(':symbol')
  async getGene(@Param('symbol') symbol: string): Promise<GeneResponse> {
    return this.geneService.getGeneInfo(symbol);
  }
}

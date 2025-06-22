import { GeneResponse } from './../interfaces/gene-response.interface';
import { Injectable } from '@nestjs/common';
import { EnsembleService } from '../providers/ensembl.service';

@Injectable()
export class GeneService {
  private readonly baseUrl: string;

  constructor(private readonly ensembleService: EnsembleService) {}

  async getGeneInfo(symbol: string): Promise<GeneResponse> {
    return this.ensembleService.lookupGene(symbol);
  }
}

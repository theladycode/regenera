import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { GeneResponse } from '../interfaces/gene-response.interface';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class EnsembleService {
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.baseUrl = this.config.getOrThrow('ENSEMBL_BASE_URL');
  }

  async lookupGene(symbol: string): Promise<GeneResponse> {
    try {
      const params = new URLSearchParams({
        'content-type': 'application/json',
      });
      const url = `${this.baseUrl}/lookup/symbol/homo_sapiens/${symbol}?${params}`;
      const geneResponse$ = this.http.get<GeneResponse>(url);
      const response = await lastValueFrom(geneResponse$);
      return response.data;
    } catch (error) {
      console.error('Erro ao consultar o gene:', error);
      throw new HttpException(
        `Erro ao consultar o gene "${symbol}" no Ensembl.`,
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}

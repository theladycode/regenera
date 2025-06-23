import { GeneService } from '../services/gene.service';
import { GeneController } from './gene.controller';

describe('gene controller ', () => {
  let geneController: GeneController;
  let geneService: GeneService;

  const mockService = {
    getGeneInfo: jest.fn(),
  };
});

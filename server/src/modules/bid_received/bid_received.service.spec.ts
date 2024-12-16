import { Test, TestingModule } from '@nestjs/testing';
import { BidReceivedService } from './bid_received.service';

describe('BidReceivedService', () => {
  let service: BidReceivedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BidReceivedService],
    }).compile();

    service = module.get<BidReceivedService>(BidReceivedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

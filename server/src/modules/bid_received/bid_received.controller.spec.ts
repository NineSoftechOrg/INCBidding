import { Test, TestingModule } from '@nestjs/testing';
import { BidReceivedController } from './bid_received.controller';

describe('BidReceivedController', () => {
  let controller: BidReceivedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BidReceivedController],
    }).compile();

    controller = module.get<BidReceivedController>(BidReceivedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

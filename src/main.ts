import { TypeormDatabase } from '@subsquid/typeorm-store';
import { processor } from './processor';
import {AddVotingService} from "./services/AddVotingService";
import {AssetCommitService} from "./services/AssetCommitService";
import {AssetDispatchService} from "./services/AssetDispatchService";
import {BurningWithdrawService} from "./services/BurningWithdrawService";
import {D9TransferService} from "./services/D9TransferService";
import {MarketMakerService} from "./services/MarketMakerService";
import {MerchantGreenPointsService} from "./services/MerchantGreenPointsService";
import {MerchantPaymentService} from "./services/MerchantPaymentService";
import {MerchantSubscribeService} from "./services/MerchantSubscribeService";
import {MerchantWithdrawService} from "./services/MerchantWithdrawService";
import {NodeRewardService} from "./services/NodeRewardService";
import {NodeWithdrawService} from "./services/NodeWithdrawService";
import {USDTTransferService} from "./services/USDTTransferService";

// import {callsRun, eventsRun} from "./handlers/main";

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    // await eventsRun(ctx)
    // await callsRun(ctx)

    await AddVotingService(ctx);
    await AssetCommitService(ctx);
    await AssetDispatchService(ctx);
    await BurningWithdrawService(ctx);
    await D9TransferService(ctx);
    await MarketMakerService(ctx);
    await MerchantGreenPointsService(ctx);
    await MerchantPaymentService(ctx);
    await MerchantSubscribeService(ctx);
    await MerchantWithdrawService(ctx);
    await NodeRewardService(ctx);
    await NodeWithdrawService(ctx);
    await USDTTransferService(ctx);
});

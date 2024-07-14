import {getBaseCallRecord, getCustomCallRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {nodeAddVoting} from "../../fire";

interface AddVoting {
    beneficiary_voter: string;
    main_pool: string;
    amount: string;
    burn_contract: string;
}

export async function fireAddVoting(block: any, event: any) {
    const baseRecord = await getBaseCallRecord(block, event, 'addVoting');
    const data: AddVoting = {
        beneficiary_voter: ss58Encode(event.call.args.beneficiaryVoter),
        main_pool: ss58Encode(event.call.args.mainPool),
        amount: event.call.args.amountToBurn,
        burn_contract: ss58Encode(event.call.args.burnContract),
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await nodeAddVoting(baseEventRecord);
}
import { eventHandlers } from "./config/eventHandlers";
import { callHandlers } from "./config/callHandlers";

export async function eventsRun(ctx: { blocks: any[] }) {
    const promises = ctx.blocks.flatMap((block: any) =>
        block.events.flatMap((event: any) =>
            eventHandlers
                .filter(({ filter }) => filter(event))
                .map(({ handler }) => handler(block, event))
        )
    );

    await Promise.all(promises).catch(err => console.error(err));
}

export async function callsRun(ctx: { blocks: any[] }) {
    const promises = ctx.blocks.flatMap((block: any) =>
        block.calls.flatMap((event: any) =>
            callHandlers
                .filter(({ filter }) => filter(event))
                .map(({ handler }) => handler(block, event))
        )
    );

    await Promise.all(promises).catch(err => console.error(err));
}

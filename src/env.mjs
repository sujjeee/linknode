import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        DUB_DOT_CO_TOKEN: z.string(),
        DUB_DOT_CO_SLUG: z.string(),
    },
    client: {
        NEXT_PUBLIC_BASE_SHORT_DOMAIN: z.string(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_BASE_SHORT_DOMAIN: process.env.NEXT_PUBLIC_BASE_SHORT_DOMAIN,
        DUB_DOT_CO_TOKEN: process.env.DUB_DOT_CO_TOKEN,
        DUB_DOT_CO_SLUG: process.env.DUB_DOT_CO_SLUG
    },
});
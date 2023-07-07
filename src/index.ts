import { CustomClient } from "./structures/Client";
import Sentry from "@sentry/node";
import { readFileSync } from "fs";
import { parse } from "toml-patch";

const config = parse(readFileSync('config.toml', 'utf-8'));

Sentry.init({
    dsn: config.sentry_dsn,
    tracesSampleRate: 1.0,
});

const lost = new CustomClient({
    database_url: config.database_url, 
    influx: config.influx,    
    auth: `Bot ${config.token}`,
    gateway: {
        intents: [
            "ALL"
        ]
    }
})

lost.connect();
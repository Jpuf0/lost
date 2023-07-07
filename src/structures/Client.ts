import { InfluxDB } from "@influxdata/influxdb-client"
import { Client, ClientOptions } from "oceanic.js"

type CustomClientOptions = ClientOptions & {
    database_url: string,
    influx: {
        url: string,
        token: string,
        org: string,
        bucket: string,
    },
    lavalink?: {
        host: string,
        password: string,
        port: number
    }
}  

export class CustomClient extends Client { 
    public influx: InfluxDB;
    public config: CustomClientOptions;
    
    constructor(config: CustomClientOptions) {
        super(config);
        this.config = config; 
        
        this.influx = new InfluxDB({
            url: this.config.influx.url,
            token: this.config.influx.token
        })
    }
}
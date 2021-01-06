import {BaseConnectionOptions} from "../../connection/BaseConnectionOptions";

/**
 * Sqlite-specific connection options.
 */
export interface CapacitorConnectionOptions extends BaseConnectionOptions {

    /**
     * Database type.
     */
    readonly type: "capacitor";

    /**
     * Database name.
     */
    readonly database: string;

    /**
     * Storage Location
     */
    readonly location: string;

    /**
     * Encrypted DB indicator
     */
    readonly encrypted: boolean;

    /**
     * Mode
     */
    readonly mode: string;

    /**
     * Version
     */
    readonly version: number;

}
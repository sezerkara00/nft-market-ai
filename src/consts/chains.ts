import { defineChain } from "thirdweb";
import { baseSepolia, sepolia } from "thirdweb/chains";

/**
 * All chains should be exported from this file
 */
export { avalancheFuji, sepolia, polygonAmoy } from "thirdweb/chains";

/**
 * Define any custom chain using `defineChain`
 */
export const example_customChain1 = defineChain(sepolia); // don't actually use this

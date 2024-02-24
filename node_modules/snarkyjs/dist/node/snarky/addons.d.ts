/**
 *
 * @param { import("../snarky").Keypair } keypair SNARK keypair, as returned by Circuit.generateKeypair
 * @returns { import("./wrapper").WasmModule['WasmFpSrs'] } The SRS (structured reference string), needed to reconstruct the keypair later
 */
export function getSrs(keypair: any): any;
/**
 *
 * @param { import("../snarky").VerificationKey } verificationKey the verification key of a Circuit
 * @returns { string } string representation of the verification key
 */
export function serializeVerificationKey(verificationKey: any): string;
/**
 * @param { import("./wrapper").WasmModule['WasmFpSrs'] } srs the "structured reference string", a set of precomputed values needed for verifying proofs
 * @param { String } serializedVk string representation of a Circuit verification key
 * @returns { import("../snarky").VerificationKey } the recovered verification key
 */
export function recoverVerificationKey(srs: any, serializedVk: string): any;

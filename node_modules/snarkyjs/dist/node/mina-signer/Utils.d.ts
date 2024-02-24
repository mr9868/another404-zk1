import type { Payment, StakeDelegation, Message, ZkappCommand, SignableData } from './TSTypes.js';
export declare function isZkappCommand(p: ZkappCommand): p is ZkappCommand;
export declare function isPayment(p: SignableData): p is Payment;
export declare function isStakeDelegation(p: SignableData): p is StakeDelegation;
export declare function isMessage(p: SignableData): p is Message;

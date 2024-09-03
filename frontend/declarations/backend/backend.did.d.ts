import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface TaxpayerRecord {
  'tid' : string,
  'address' : string,
  'lastName' : string,
  'firstName' : string,
}
export interface _SERVICE {
  'addTaxpayer' : ActorMethod<[string, string, string, string], TaxpayerRecord>,
  'deleteTaxpayer' : ActorMethod<[string], boolean>,
  'getTaxpayer' : ActorMethod<[string], [] | [TaxpayerRecord]>,
  'updateTaxpayer' : ActorMethod<[string, string, string, string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];

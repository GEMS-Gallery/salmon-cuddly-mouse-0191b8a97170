import Bool "mo:base/Bool";
import Hash "mo:base/Hash";

import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";

actor {
  type TaxpayerRecord = {
    tid: Text;
    firstName: Text;
    lastName: Text;
    address: Text;
  };

  let taxpayers = HashMap.HashMap<Text, TaxpayerRecord>(0, Text.equal, Text.hash);

  public func addTaxpayer(tid: Text, firstName: Text, lastName: Text, address: Text) : async TaxpayerRecord {
    let record: TaxpayerRecord = {
      tid = tid;
      firstName = firstName;
      lastName = lastName;
      address = address;
    };
    taxpayers.put(tid, record);
    Debug.print("Added taxpayer with TID: " # tid);
    record
  };

  public query func getTaxpayer(tid: Text) : async ?TaxpayerRecord {
    taxpayers.get(tid)
  };

  public func updateTaxpayer(tid: Text, firstName: Text, lastName: Text, address: Text) : async Bool {
    switch (taxpayers.get(tid)) {
      case (null) { false };
      case (?_) {
        let updatedRecord: TaxpayerRecord = {
          tid = tid;
          firstName = firstName;
          lastName = lastName;
          address = address;
        };
        taxpayers.put(tid, updatedRecord);
        true
      };
    }
  };

  public func deleteTaxpayer(tid: Text) : async Bool {
    switch (taxpayers.remove(tid)) {
      case (null) { false };
      case (?_) { true };
    }
  };
}
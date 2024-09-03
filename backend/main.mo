import Text "mo:base/Text";

// Main actor for the backend
import Debug "mo:base/Debug";

actor {
  // Placeholder function
  public func greet(name : Text) : async Text {
    Debug.print("Hello, " # name # "!");
    return "Hello, " # name # "!";
  };
}
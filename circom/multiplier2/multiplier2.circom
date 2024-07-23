pragma circom 2.0.0;

template Multiplier2 () { // A circuit template

   // Declaration of signals.
   signal input a;
   signal input b;
   signal output c;

   // Constraints.
   c <== a * b;
}

component main = Multiplier2(); // Instantiate the template
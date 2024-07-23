pragma circom 2.1.6;

template AdditionProof() {
    // declaration of signals
    signal input a; // Private input
    signal input b;
    signal output sum;

    // constraint
    sum <== a + b;
}

component main = AdditionProof();

/* INPUT = {
    "a": 3,
    "b": 5
} */
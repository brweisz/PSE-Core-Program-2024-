pragma circom 2.1.6;

template MultiplicationProof() {
    signal input a;
    signal input b;
    signal input c;
    signal aux;
    signal output mul;

    // constraint
    aux <== a * b;
    mul <== aux * c;
}

component main = MultiplicationProof();

/* INPUT = {
    "a": 3,
    "b": 5,
    "c": 10
} */
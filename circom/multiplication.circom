pragma circom 2.1.6;

template MultiplicationProof() {
    signal input a;
    signal input b;
    signal input c;
    signal input d;
    signal aux;
    signal aux2;
    signal output mul;

    // constraint
    aux <== a * b;
    aux2 <== c * d;
    mul <== aux + aux2;
}

component main = MultiplicationProof();

/* INPUT = {
    "a": 3,
    "b": 5,
    "c": 10,
    "d": 4,
} */
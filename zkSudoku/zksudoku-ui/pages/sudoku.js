const contract = useContract({
    addressOrName: contractAddress.sudokuContract,
    contractInterface: sudokuContractAbi.abi,
    signerOrProvider: signer || provider,
});

result = await contract.verifySudoku(
    calldata.a,
    calldata.b,
    calldata.c,
    calldata.Input
);

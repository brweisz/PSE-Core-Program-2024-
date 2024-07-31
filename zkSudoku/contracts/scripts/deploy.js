const main = async () => {
    console.log("A")
    const SudokuVerifier = await hre.ethers.getContractFactory("SudokuVerifier");
    console.log("B")
    const sudokuVerifier = await SudokuVerifier.deploy();
    console.log("C")
    await sudokuVerifier.waitForDeployment();
    console.log("SudokuVerifier Contract deployed to:", sudokuVerifier.getAddress());

    const Sudoku = await hre.ethers.getContractFactory("Sudoku");
    const sudoku = await Sudoku.deploy(sudokuVerifier.getAddress());
    await sudoku.waitForDeployment();
    console.log("Sudoku Contract deployed to:", sudoku.getAddress());
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
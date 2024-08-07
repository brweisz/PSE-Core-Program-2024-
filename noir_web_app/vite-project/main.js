import circuit from '../circuit/target/circuit.json';
import { BarretenbergBackend, BarretenbergVerifier as Verifier } from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';

const backend = new BarretenbergBackend(circuit);
const noir = new Noir(circuit);
let input = ""
let proof;

function display(container, msg) {
    const c = document.getElementById(container);
    const p = document.createElement('p');
    p.textContent = msg;
    c.appendChild(p);
}

async function setup(){
    display('logs', 'Generating proof... ⌛');
    const { witness } = await noir.execute(input);
    proof = await backend.generateProof(witness);
    display('logs', 'Generating proof... ✅');
    display('results', proof.proof);
}

document.getElementById('submitGuess').addEventListener('click', async () => {
    try {
        const x = parseInt(document.getElementById('guessInput').value);
        input = { x, y: 2 };

        await setup();

    } catch (err) {
        display('logs', 'Oh 💔 Wrong guess');
    }
});

document.getElementById('verify').addEventListener('click', async()=>{
    console.log('logs', 'Verifying proof... ⌛');
    const isValid = await backend.verifyProof(proof);
    if (isValid) console.log('Correct');
})
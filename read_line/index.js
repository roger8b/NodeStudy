import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question() {
    rl.question("Digite um número: ", inputData => {
        let num = parseInt(inputData);
        if (num === -1) {
            rl.close();
        } else {
            const multi = [];
            for (let i = 3; i < num; i++) {
                if ((i % 3 === 0) || (i % 5 === 0)) multi.push(i)
            }
            console.log(multi)
            question()
        }

    })
}

question();
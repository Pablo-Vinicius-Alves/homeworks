import chalk from "chalk";
import { intro, password } from "@clack/prompts";

const senha = "Pa999";

async function Login() {
    for (let i = 0; i < 3; i++) {
        console.log(chalk.redBright.underline(`Login`));
        const correct = await password({ message: "Insira sua senha:" });

        if (correct === senha) {
            intro(chalk.bgGreen(" SUCESSO! "));
            return;
        } else {
            intro(chalk.bgRed(" Dados incorretos! "));
        }
    }
    intro(chalk.bgRed(" Limite de tentativas excedido. "));
}

Login();



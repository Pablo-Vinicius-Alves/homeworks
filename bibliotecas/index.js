import chalk from "chalk";
import { intro, text } from "@clack/prompts"

const senha = "Pamonha999";

async function Login() {
    console.log(chalk.redBright.underline(`Login`));
    const correct = await text({ message: "Insira sua senha:" });
    if (correct === senha) {
        intro(chalk.bgGreen(" SUCESSO! "));
    } else {

        intro(chalk.bgRed(" Dados inccorretos! "))
        return Login();
    }
}

Login();


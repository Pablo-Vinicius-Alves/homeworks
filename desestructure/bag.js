function main() {

    const player = {
        nickname: "Thorfinn",
        health: 50,
        inventory: {
            itens: ["Sword", "Shield", "Spear"],
            potions: [
                { type: "regeneration", duration: 10 },
                { type: "strength", duration: 20 },
            ]
        },
    }

    const { inventory } = player
    console.log(inventory);

    const { inventory: { potions } } = player

    const [{ type, duration }, { type: secondType, duration: secondDuration }] = potions
    console.log(type, duration);
    console.log(secondType, secondDuration);
}

main();

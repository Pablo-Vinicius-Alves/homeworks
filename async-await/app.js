const promessa = new Promise((resolve, reject) => {
    const ok = Math.random() > 0.5;
    setTimeout(() => {
        if(ok) resolve("Deu certo!")
            else reject(new Error("Deu errado!"));
    }, 1000);
});
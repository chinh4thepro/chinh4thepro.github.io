const lettersandnumbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

document.querySelector("text-scrambling").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return event.target.dataset.value[index];
                }
                return lettersandnumbers[Math.floor(Math.random() * 62)]
            })
            .join("");
    
        if(iterations >= event.target.dataset.value.length) clearInterval(interval);    
        
        iterations += 1 / 3;
    }, 30);
}
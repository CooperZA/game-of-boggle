export function generateRandomChar(): string {
    const disallowedChars = ["x", "z", "j", "q"];

    // most frequent letter, 2x as much. etar
    // modify random number generator to produce 2x as much 

    const Numtostr = Math.floor(Math.random() * 26) + 97;

    
    const char = String.fromCharCode(Numtostr);

    if (disallowedChars.includes(char)) {
        return generateRandomChar()
    }

    return char;
}
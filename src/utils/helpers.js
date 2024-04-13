export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const appendToArray = () => {
    let array = []
    let i = 0

    while (i < 10) {
        let number = getRandomInt(1,21);
        if (!array.includes(number)) {
            array.push(number)
            i += 1
        }
    }

    return array
}
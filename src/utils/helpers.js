export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const appendToArray = () => {
    let array = []

    for (var i = 0; i < 10; i++) {
        array.push(getRandomInt(1,21))
    }

    return array
}
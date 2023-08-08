function add(num1: number, num2: number) {
    return num1 + num2;
}

add(3, 5)

const addArrow = (num1: number, num2: number) => { num1 + num2 }

const arr = [2, 5, 9]

const newArray = arr.map((elem: number) => elem * elem)
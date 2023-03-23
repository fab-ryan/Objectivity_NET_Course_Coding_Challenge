function getArrayModifications<T>(originalArray: T[], updatedArray: T[]): { newElements: T[], removedElements: T[] } {
    const newElements: T[] = new Array<T>();
    const removedElements: T[] = new Array<T>();

    // Find new elements
    for (const element of updatedArray) {
        if (!originalArray?.includes(element)) {
            newElements.push(element);
        }
    }

    // Find removed elements
    for (const element of originalArray) {
        if (!updatedArray?.includes(element)) {
            removedElements.push(element);
        }
    }

    return { newElements, removedElements };
}

const originalArray = [1, 2, 3];
const updatedArray = [2, 3, 4];
const modifications = getArrayModifications(originalArray, updatedArray);

console.log(modifications.newElements);
console.log(modifications.removedElements); 
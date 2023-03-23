"use strict";
function getArrayModifications(originalArray, updatedArray) {
    const newElements = new Array();
    const removedElements = new Array();
    // Find new elements
    for (const element of updatedArray) {
        if (!(originalArray === null || originalArray === void 0 ? void 0 : originalArray.includes(element))) {
            newElements.push(element);
        }
    }
    // Find removed elements
    for (const element of originalArray) {
        if (!(updatedArray === null || updatedArray === void 0 ? void 0 : updatedArray.includes(element))) {
            removedElements.push(element);
        }
    }
    return { newElements, removedElements };
}
const originalArray = [1, 2, 3];
const updatedArray = [2, 3, 4];
const modifications = getArrayModifications(originalArray, updatedArray);
console.log("New Element", modifications.newElements);
console.log("Removed Element", modifications.removedElements);

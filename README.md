
# Objectivity Challenge questions

this repo that contains Objectivity  .NET Course Coding Challenge. the implementation was done in Typescript and JavaScript. 

# Array Change

Array Change is Challenge that implement the functionality that take two array and return them but seperately where one return add value and other include removed value.

### How to run test

Since `js File` is touched on this branch and must have the 
`nodeJS` installed just run:
- `node arrayChange/`
 or first compile ts file to js by running 
 - `tsc` then run previous commands:
 - `node arrayChange/`
  but first of all typescript compiler should be installed.

### Example

```
const originalArray = [1, 2, 3];
const updatedArray = [2, 3, 4];

```

### Out put should be:

`newElements as new element`

`removedElements as removed element`

in other word this should be out but
```
New Element [ 4 ] 

Removed Element [ 1 ]
```

# Bank Account Management
Application that simulates a simple bank account system. The app should allow users to create accounts, deposit and withdraw money, and view their account balance. Implement basic error handling, such as preventing negative balances

### How to run test

Since `js File` is touched on this branch and must have the 
`nodeJS` installed just run:
- `node bankAccountManagement/`
 or first compile ts file to js by running 
 - `tsc` then run previous commands:
 - `node bankAccountManagement/`
  but first of all typescript compiler should be installed.


### Example
input values are follows:

```
createAccount("Fabrice");
deposit("Fabrice", 1000);
withdraw("Fabrice", 500);
viewBalance("Fabrice");
withdraw("Fabrice", 2000);
```

### Expect out put 


```

- Account created for Fabrice.
- $1000 deposited into Fabrice's account.
- Fabrice's balance is now $1000.
- $500 withdrawn from Fabrice's account.
- Fabrice's balance is now $500.
- Fabrice's balance is $500.
- Insufficient funds. Fabrice's balance is $500.

```


# Reference

- [NodeJs](https://nodejs.org/en/docs): this is for Node JS
- [TypeScript](https://www.typescriptlang.org/docs/): for Installation and compiler of typescript 
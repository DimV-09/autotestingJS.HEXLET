import capitalize from '../capitalize.js'
let [firstLater, ...secondLater] = capitalize('text');
if (firstLater != firstLater.toUpperCase()) {
    throw new Error('First letter isen\'t uppercase ')
};


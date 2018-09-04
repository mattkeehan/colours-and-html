'use strict';

const pad = numberString => {
    while (numberString.length < 2) { numberString = '0' + numberString; }
    return numberString;
};

/**
 *
 * @param col1 hexidecimal string, eg '11ff99'
 * @param col2 hexidecimal string, eg '11ff99'
 * @returns {string} 6 digit hex string average of colours passed in
 */
const colours = (col1, col2) => {
    const colourSetOne = col1.match(/.{1,2}/g).map(colour => parseInt(colour, 16));
    const colourSetTwo = col2.match(/.{1,2}/g).map(colour => parseInt(colour, 16));
    const calculatedColourSet = [0, 1, 2].map(num =>
        pad((Math.floor((colourSetOne[num] + colourSetTwo[num]) / 2)).toString(16)));

    return calculatedColourSet.join('');
};
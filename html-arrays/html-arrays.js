'use strict';

/**
 *
 * @param an array of text
 * @returns {string} an HTML string
 */
const getHtmlString = inputArray => {
	let htmlStartString = '';
	let htmlEndString = '';

	if (inputArray.length === 1) return `<${inputArray[0]}/>`;

	inputArray.forEach((item, index) => {
		if (index === 0) {
			htmlStartString += `<${item}>`;
			htmlEndString += `</${item}>`;
		} else {
			if (Array.isArray(item)) htmlStartString += getHtmlString(item);
			else htmlStartString += item;
		}
	});

	return htmlStartString + htmlEndString;
};


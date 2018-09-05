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

//Console shows failed assertions only
console.assert(getHtmlString(['div']) === '<div/>', {"message": "test 1"});
console.assert(getHtmlString(['h1', 'Text']) === '<h1>Text</h1>', {"message": "test 2"});
console.assert(getHtmlString(['span', 'More', 'Text']) === '<span>MoreText</span>', {"message": "test 3"});
console.assert(getHtmlString(['a', ['b', 'More'], ' Text']) === '<a><b>More</b> Text</a>', {"message": "test 4"});
console.assert(getHtmlString(['p', '<b>Text</b>']) === '<p><b>Text</b></p>', {"message": "test 5"});
console.assert(getHtmlString(['a', ['b', 'More', ['i', 'one', ' two']], ' Text']) === '<a><b>More<i>one two</i></b> Text</a>', {"message": "test 6"});

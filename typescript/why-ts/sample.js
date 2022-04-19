// @ts-check

/**
 * 
 * @param {number} a first number
 * @param {number} b second number
 * @returns 
 */
function add(a, b) {
  return a + b;
}

add(1, 2);
// sum(1, '2'); //by default: error but no assist. after @ts-check: shows error


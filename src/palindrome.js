'use strict';
function isPalindrome(str) {
    if (typeof str !== 'string') return false;
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = isPalindrome;
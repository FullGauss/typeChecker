"use strict"
/**
 * @function isFunction - Checking whether a variable is a function
 * @param {function} funct - Variable to check
 * @returns {boolean} - Returns true if the variable is a function
 */
function isFunction(funct){
   return Object.prototype.toString.call(funct)=="[object Function]";
}
/**
 * @function isArray - Checking whether a variable is a array
 * @param {array} arr - This is variable to check
 * @returns {boolean} - Returns true if the variable is a array
 */
function isArray(arr){
    return Object.prototype.toString.call(arr)=="[object Array]";
}
/**
 * @function isObject - Checking whether a variable is a object
 * @param {object} obj - This is variable to check
 * @returns {boolean} - Returns true if the variable is a object
 */
function isObject(obj){
    return Object.prototype.toString.call(obj)=="[object Object]";
}
/**
 * @function isNumber - Checking whether a variable is a number
 * @param {number} num - This is variable to check
 * @returns {boolean} - Returns true if the variable is a number
 */
function isNumber(num){
    return Object.prototype.toString.call(num)=="[object Number]";
}
/**
 * @function isString - Checking whether a variable is a string
 * @param {string} str - This is variable to check
 * @returns {boolean} - Returns true if the variable is a string
 */
function isString(str){
    return Object.prototype.toString.call(str)=="[object String]";
}


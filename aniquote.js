/**
 * @file aniquote.js
 * @description Return a random anime quote
 */
const fs = require('fs');

/**
 * A Class that has one method and is useless
 * @class
 */
 class Aniquote {
     /**
      * Returns a Quote
      * @returns{Object} the quote object.
      */
     static giveQuote() {
         let c = JSON.parse(fs.readFileSync(`${__dirname}/quotes.json`));
         let d = c[Math.floor(Math.random() * c.length)];

         return d;
     }
 }

 module.exports = Aniquote;

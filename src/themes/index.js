'use strict';

const tokenColors = require('./syntax-highlight');
const colors = require('./theme-color');

/** @type {import('../declaration').DarkParty} */
const darkParty = {
  name: 'Dark Party',
  type: 'dark',
  semanticHighlighting: true,
  colors,
  tokenColors,
};

for (const key of Object.keys(darkParty.colors)) {
  if (!darkParty.colors[key]) delete darkParty.colors[key];
}

module.exports = darkParty;

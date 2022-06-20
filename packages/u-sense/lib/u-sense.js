'use strict';

module.exports = uSense;

// import utag from 'shiled-utag'
const utag = require("shiled-utag")

function uSense() {
    console.log(utag());
    return "uSense 11"
}
uSense()

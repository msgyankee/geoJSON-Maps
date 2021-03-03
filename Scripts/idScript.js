//const axios = require('axios');
const json = require('./all.json');
const europejson = require('./europe.json');
const asiajson = require('./asia.json')
const northamerica = require('./northamerica.json')

async function getDataByName(array) {
    let curr = new Array();
    json.forEach((country) => {
        array.forEach((country2) => {
            if (country.name === country2) {
                curr.push(country);
            }
        })
    })
    return curr;
}
async function getDataSubRegion(str) {
    let curr = new Array();
    json.forEach((country) => {
        if (country.sub_region === str) {
            curr.push(country);
        }
    })
    return curr;
}

async function getDataIntermediateRegion(str) {
    let curr = new Array();
    json.forEach((country) => {
        if (country.intermediate_region === str) {
            curr.push(country);
            
        }
    })
    return curr;
}

async function createList(array) {
    let curr = new Array();
    array.forEach((country) => {
        curr.push({"name":country.name, "id":country.country_code});
    })
    return curr;
}
/**
 * 
 * @param {*} array This is the list of countries + their IDs {country name: Belarus, id: 4}
 */
async function addID(array) {
    const features = northamerica.features;
    const obj = {
        table: []
    };
    features.forEach((country)=> {
        array.forEach((current) => {
            if (country.properties.name === current.name) {
                obj.table.push({
                    "type": "Feature",
                    "properties": {
                        "name": country.properties.name,
                        "id": current.id
                        },
                    "geometry": country.geometry
                });
            }
        })
    });
    return obj;
}

module.exports = {
    getDataIntermediateRegion,
    getDataSubRegion,
    createList,
    addID,
    getDataByName
}
const idScript = require("./idScript");
const fs = require('fs');
async function main() {
    //console.log("*********************Eastern Europe****************************");
    //const easternEurope = await idScript.getDataSubRegion("Eastern Europe");
    //const strippedEasternEurope = await idScript.createList(easternEurope);
    //const easternEuropeObj = await idScript.addID(strippedEasternEurope);
    //console.log(easternEuropeObj);
    //const easternEuropeString = JSON.stringify(easternEuropeObj);
    //console.log(easternEuropeString);
    //console.log("*******************WESTERN EUROPE*********************************")
    // const westernEurope = await idScript.getDataSubRegion("Western Europe");
    // const stripped = await idScript.createList(westernEurope);
    // const westernObj = await idScript.addID(stripped);
    // const westernString = JSON.stringify(westernObj);
    // console.log(westernString);
    /* const middleEast = ["Bahrain", "Cyprus", "Egypt", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Palestine", "Qatar", "Saudi Arabia", "Syrian Arab Republic", "Turkey", "United Arab Emirates", "Yemen"];
    const middleEastCountries = await idScript.getDataByName(middleEast);
    const stripped = await idScript.createList(middleEastCountries);
    const midObj = await idScript.addID(stripped);
    const midString = JSON.stringify(midObj);
    console.log(midString); */
    const centralAmerica = await idScript.getDataIntermediateRegion("Central America");
    const stripped = await idScript.createList(centralAmerica);
    const obj = await idScript.addID(stripped);
    const jsonstring = JSON.stringify(obj);
    console.log(jsonstring);

}
main();
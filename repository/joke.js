const axios = require('axios');
const apiJoke = "http://api.icndb.com/jokes/random/";

const JokeRepository = {
    callInitialFetch: callInitialFetch,
    showFiveData: showFiveData,
    removeAll: removeAll,
    showTenDdata: showTenDdata,
    showFrequentlyWord: showFrequentlyWord


}

let storageMap = {}

async function initialFetchData() {
    try {
        let result = await axios.get(apiJoke);
        return result;
    } catch (e) {
        console.log(e)
    }
    return {};
}

function showFiveData() {
    let data = [];
    Object.keys(storageMap).slice(0, 5).forEach(function (key) {
        var value = storageMap[key];
        data.push(value)
    });
    return data;
}

function showFrequentlyWord() {
    let data = [];
    Object.keys(storageMap).forEach(function (key) {
        var value = storageMap[key].value.joke.split(" ");
        value.map(word => data.push(word));
    });
    return data;
}
function showTenDdata() {
    let data = [];
    Object.keys(storageMap).forEach(function (key) {
        var value = storageMap[key];
        data.push(value)
    });
    return data;
}

function removeAll() {
    storageMap = {}
}

async function callInitialFetch() {
    let result = await initialFetchData();
    let data = result.data;
    if (data.value != undefined && data.value.joke != undefined) {
        storageMap[data.value.joke] = data
    }
    if (Object.keys(storageMap).length < 10) {
       await callInitialFetch();
    }
    return storageMap;
}

module.exports.JokeRepository = JokeRepository


var express = require('express')
var {JokeRepository} = require('../repository/joke')
var router = express.Router()


router.get('/showFiveData', async function (req, res) {
    try {
        let result = await JokeRepository.showFiveData()
        res.json({status: "success", message: "show five data success", data: result})
    } catch (e) {
        console.error(e)
        res.status(500).json({status: "error", message: e, data: null})
    }
})

router.get('/showFrequentlyWord', async function (req, res) {
    try {
        let result = await JokeRepository.showFrequentlyWord()
        res.json({status: "success", message: "show all words data success", data: result})
    } catch (e) {
        console.error(e)
        res.status(500).json({status: "error", message: e, data: null})
    }
})

router.get('/showTenData', async function (req, res) {
    try {
        let result = await JokeRepository.showTenDdata()
        res.json({status: "success", message: "show five data success", data: result})
    } catch (e) {
        console.error(e)
        res.status(500).json({status: "error", message: e, data: null})
    }
})

router.delete('/removeAll', async function (req, res) {
    try {
        let result = await JokeRepository.removeAll()
        res.json({status: "success", message: "remove success", data: null})
    } catch (e) {
        console.error(e)
        res.status(500).json({status: "error", message: e, data: null})
    }
})

router.post('/fetchAndStore', async function (req, res) {
    try {
        let result = await JokeRepository.callInitialFetch()
        res.json({status: "success", message: "fetch success", data: null})
    } catch (e) {
        console.error(e)
        res.status(500).json({status: "error", message: e, data: null})
    }
})

module.exports = router
const express = require('express');
const router = express.Router();
const Student = require('../models/curd');


/* router.get('/', async (req, res) => {
    try {                                           
        const std = await Student.find();
        res.json(std);
    } catch (err) {                            
        res.send('Error ' + err);
    }
}) */
router.get('/', (req, res) => {
    return new Promise(function (resolve, reject) {
        const std =  Student.find();
        resolve(std);
    });
})
 /* let promise = new Promise(function (resolve, reject) {
    if (req) {
        const std = await Student.find();
        resolve(res.json(std););
    }
    else{
        reject(new Error({msg: 'It does not work'}))
    })) */

router.get('/:id', async (req, res) => {
    try {
        const std = await Student.findById(req.params.id);
        res.json(std);
    } catch (err) {
        res.send('Error ' + err);
    }
})


router.post('/', async (req, res) => {
    const std = new Student({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const StudentObj = await std.save();
        res.json(StudentObj);
    } catch (err) {
        res.send('Error');
    }
})

router.patch('/:id', async (req, res) => { //put 
    try {
        const std = await Student.findById(req.params.id)
        std.sub = req.body.sub
        const a1 = await std.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router
var express = require('express');
var router = express.Router();

const Tasks = require('../models').task
const sequelize = require('../models').sequelize
const Op = require('sequelize').Op

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.get('/', async (req, res, next) => {
    const result = await Tasks.findAll({
        // attributes: {exclude: ['id']}
    })
    .catch ( error => {
      res.status( 400 ).send(error)
    })
    res.json(result)
    console.log(result)
  });

  router.post('/addChat', async (req, res, next) => {
    const result = await Tasks.create({
        nama_pengirim: req.body.me,
        nama_penerima: req.body.to,
        pesan: req.body.message,
    },
    {
        where: {
          id: req.params.id
        }
    })
    res.json(result)
  });
  router.put('/setTask/:id', async (req, res, next) => {
      const result = await Tasks.update({
          name: req.body.name,
          done: req.body.done,
          created_at: new Date,
          updated_at: new Date,
        },
        {
            where: {
              id: req.params.id
            }
        })
        .catch ( error => {
            res.status( 400 ).send(error)
        })
        res.json(result)
    });
    
    router.delete('/delTask/:id', async (req, res, next) => {
      const result = await Tasks.destroy({
          where: {
              id: req.params.id
            }
      })
      .catch ( error => {
        res.status( 400 ).send(error)
      })
      res.json(result)
    });
    
  
module.exports = router;


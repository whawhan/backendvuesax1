var express = require('express');
var router = express.Router();

const Chat = require('../models').chat
const Sequelize = require('../models').sequelize
const Op = require('sequelize').Op
const WebSocket = require('ws')

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.get('/', async (req, res, next) => {
    const result = await Chat.findAll({
        // attributes: {exclude: ['id']}
    })
    .catch ( error => {
      res.status( 400 ).send(error)
    })
    res.json(result)
    console.log(result)
  });


router.post('/', async (req, res, next) => {
    const ws = new WebSocket('ws://localhost:8000');
    ws.on('open', ()=> {
      const data = JSON.stringify({
        from : req.body.from,
        to : req.body.to,
        private:req.body.private,
        message : req.body.message
      })
      ws.send(data);
    });

    res.end()
  });
  

  router.post('/addChat', async (req, res, next) => {
    // const result = await Chat.create({
    //     nama_pengirim: req.body.me,
    //     nama_penerima: req.body.to,
    //     pesan: req.body.message,
    // })
    // })

    console.log(req.body)

    const sql = `INSERT INTO chat (nama_pengirim,nama_penerima,pesan) VALUES (?,?,?)`;
    const [[result]] = await Sequelize.query(sql, {
      replacements: [
        req.body.me,
        req.body.to,
        req.body.message
      ],
      type : Sequelize.QueryTypes.INSERT
    });
    // res.json(result)
    // console.log(result);

    
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


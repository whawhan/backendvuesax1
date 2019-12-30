var express = require('express');
var router = express.Router();

const Personil = require('../models').master_personil
const sequelize = require('../models').sequelize
const Op = require('sequelize').Op

router.get('/', async (req, res, next) => {
    const result = await Personil.findAll({
    })
    .catch ( error => {
      res.status( 400 ).send(error)
    })
    res.json(result)
    console.log(result)
  });

router.post('/add', async (req, res, next) => {
  // const result = await Personil.create({
  //     name: req.body.name,
  //     tempat_lahir: req.body.tempat_lahir,
  //     email_internet: req.body.email_internet,
  //     // nama_panggil: req.body.category,
  // })
  // res.json(result)

  const sql = `INSERT INTO master_personil (npp,nama_lengkap,tempat_lahir,email_internet) VALUES (?,?,?,?)`;
    const [[result]] = await sequelize.query(sql, {
      replacements: [
        req.body.npp,
        req.body.name,
        req.body.tempat_lahir,
        req.body.email_internet,
      ],
      type : sequelize.QueryTypes.INSERT
    });
});
module.exports = router;
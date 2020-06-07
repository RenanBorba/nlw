const express = require('express')

const server = express()

// Conexão com banco de dados
const db = require("./database/db")

// Configurar pasta public
server.use(express.static("public"))

// Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

// Utilizando Template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

// Configurar caminhos/rotas da aplicação
// server.get("/", function(req,res) {
// req: requisição, res: resposta
server.get("/", (req,res) => {
  //res.sendFile(__dirname + "/views/index.html")
  return res.render("index.html", {
    title: "Um título"
  })
})

server.get("/create-point", (req,res) => {
  // req.query: Query Strings da nossa url
  // console.log(req.query)

  return res.render("create-point.html")
})

server.post("/save-point", (req, res) => {
  // req.body: o corpo da requisição/do nosso form
  // console.log(req.body)

  // Inserir dados no bd
  const query =
    ` INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
      ) VALUES (?,?,?,?,?,?,?)
    `

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  // callback function
  function afterInsertData(err) {
    if (err) {
      console.log(err)
      // return res.send("Erro no cadastro! Tente novamente.")

      return res.render("create-point.html", { saved: false })
    }

    // console.log("Cadastrado com sucesso")
    // console.log(this)

    //return res.send("ok")

    return res.render("create-point.html", { saved: true })
  }

  db.run(query, values, afterInsertData)
})

server.get("/search-results", (req,res) => {
  const search = req.query.search

  if(search == "") {
    // pesquisa vazia
    return res.render("search-results.html", { total: 0 })
  }


  //obter os dados do banco
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length

    // mostrar na página html com os dados do banco
    return res.render("search-results.html", { places: rows, total })
  })
})

// server start (ouvir porta 3000)
server.listen(3000)

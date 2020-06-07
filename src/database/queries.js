
// Utilizar o objeto de bd em nossas operações
// sequência de código
// db.serialize(() => {
  // com comandos SQL, vou:

  // 1 Criar uma tabela
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT,
//       image TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   // 2 Inserir dados dinâmicos na tabela
//   const query =
//     ` INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//       ) VALUES (?,?,?,?,?,?,?)
//     `

//   const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     "PaperSide",
//     "Bebedouro, São Paulo, R. João Matheus de Moraes",
//     "231, apt 202, blo 10",
//     "São Paulo",
//     "Bebedouro",
//     "Papéis e Papelão"
//   ]

//   // callback function
//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err)
//     }

//     console.log("Cadastrado com sucesso")
//     // referência da resposta
//     console.log(this)
//   }

//   // db.run(query, values, afterInsertData)

//   // 3 Consultar os dados na tabela
//   // db.all(`SELECT * FROM places`, function(err, rows) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }

//   //   console.log("Aqui estão os seus registros: ")
//   //   console.log(rows)
//   // })

//   // 4 Deletar um dado da tabela
//   // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }

//   //   console.log("Registro deletado com sucesso!")
//   // })
// })
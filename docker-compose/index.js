const express = require("express");
const Pool = require("pg-pool")
const dotenv = require("dotenv")

const app =express();
dotenv.config();
app.get("/", async (req,res)=>{

  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  pool.connect().then(() => {
    console.log("db connected");
  }).catch(err => {
    console.log("err",err)
  });

  var result = await pool.query('select $1::text as name', ['brianc'])
    console.log('hello from', result.rows[0])

  res.send("hello world");
});

app.listen(4000,()=>{
  console.log("server is running on 4000");
});
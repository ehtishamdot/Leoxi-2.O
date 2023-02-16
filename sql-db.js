const sql = require("msnodesqlv8");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const crypto = require("crypto");
const { json } = require("body-parser");

var app = express();
const router = express.Router();

const algorithm = "aes-256-cbc";
// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);
// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);
// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const connectionString =
  "server=.\\SQLEXPRESS;Database=leoxi;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

app.get("/users", function (req, res) {
  const query = "SELECT * FROM userInfo";
  sql.query(connectionString, query, (err, rows) => {
    res.send(rows);
  });
});

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  const query = `SELECT * FROM userInfo where id = '${req.params.id}'`;
  sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
    res.send(...rows);
  });
});

app.get("/user/coin/:id", function (req, res) {
  console.log(req.params.id);

  const query = `SELECT * FROM coin where id = '${req.params.id}'`;
  sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
    res.send(...rows);
  });
});

app.post("/send-request/:id", (req, res) => {
  console.log(req.body);
  res.send("req.bodydjhsdjshdjdh");

  const patient = req.body;
  const query = `INSERT INTO HospitalData(AppointmentNo, PName, Age, Gender, AppointmentTime) values(${patient.AppointmentNo}, '${patient.pname}', '${patient.age}', '${patient.pgender}', '${patient.ptime}')`;
  sql.query(connectionString, query, (err, _) => {
    console.log(err);
  });
});

app.post("/coins", (req, res) => {
  console.log(req.body);
  res.send("req.bodydjhsdjshdjdh");
  const message = req.body;

  let encryptedData = cipher.update(message.coins + "", "utf-8", "hex");
  encryptedData += cipher.final("hex");
  console.log("Encrypted message: " + encryptedData);
  console.log("coins: " + message.coins);

  const query = `INSERT INTO coin(coinEncrypt,coinValue,id) values('${encryptedData}',${Number(
    message.coins
  )},'${message.id}')`;
  sql.query(connectionString, query, (err, _) => {
    console.log(err);
  });
});

app.post("/coinsChange", function (req, res) {
  // the decipher function
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

  decryptedData += decipher.final("utf8");

  console.log("Decrypted message: " + decryptedData);

  const query = `update  coin set=coinEncrypt ='${decryptedData}'`;
  sql.query(connectionString, query, (err, rows) => {
    console.log("Data Retrieved Successfully");
    res.send({ rows });
  });
});

app.get("/usersHistory", function (req, res) {
  const query = "SELECT * FROM HospitalData";
  sql.query(connectionString, query, (err, rows) => {
    console.log("Data Retrieved Successfully");
    res.send({ rows });
  });
});

app.get("/requests", function (req, res) {
  const query = "SELECT * FROM HospitalData";
  sql.query(connectionString, query, (err, rows) => {
    console.log("Data Retrieved Successfully");
    res.send({ rows });
  });
});

var server = app.listen(5000, function () {
  console.log("Server is running..");
});

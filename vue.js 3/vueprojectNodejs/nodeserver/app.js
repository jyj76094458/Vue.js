const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(99);

const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost'
    , port: 3306
    , user: 'root'
    , password: '0000'
    , database: 'userlist'
});

connection.connect((err) => {
    if (err) {
        console.error('MariaDB 연결 실패: ', err.stack);
        return;
    }
    console.log('MariaDB에 연결되었습니다.');
});

app.get('/', function (req, res) {
    res.send("home");
});

app.post('/login', function (req, res) {
    console.log(req.body.id);
    console.log(req.body.password);
    let id = req.body.id;
    let password = req.body.password;


    let selectQuery = `select id, password from member where 1=1 and id="${id}" and password="${password}"`;

    connection.query(selectQuery,
        (error, results) => {
            if (error) {
                console.error('쿼리 실행 실패: ', error);
                res.status(500).send('서버 오류');
                return;
            }
        res.redirect('/');
    });
});

app.post('/memberJoin', function (req, res) {
    console.log(req.body.id);
    console.log(req.body.password);
    console.log(req.body.name);
    console.log(req.body.address);
    console.log(req.body.phoneNumber);
    console.log(req.body.residentRegistrationNumber);
    let id = req.body.id;
    let password = req.body.password;
    let name = req.body.name;
    let address = req.body.address;
    let phoneNumber = req.body.phoneNumber;
    let residentRegistrationNumber = req.body.residentRegistrationNumber;
    let sex;
    let authority;
    let created;
    let updated;

    const date = new Date();
    const offset = 9 * 60;
    const utcString = date.toISOString();
    const utcDate = new Date(utcString);
    const koreanDate = new Date(utcDate.getTime() + offset * 60 * 1000);
    const formattedDateTime = koreanDate.toISOString().replace('T', ' ').split('.')[0];
    created = formattedDateTime;
    updated = formattedDateTime;

    const digit = Number(residentRegistrationNumber[6]);
    if (digit %2 === 1) {
        sex = "남";
    } else if (digit %2 === 0) {
        sex = "여";
    }
    console.log(sex);
    
    if (id === "root") {
        authority = "admin";
    } else {
        authority = "user";
    }
    console.log(authority);

    console.log(created);
    console.log(updated);

    let insertQuery = `INSERT INTO member(id, password, name, address, phoneNumber, residentRegistrationNumber, sex, authority, created, updated) VALUES 
        ('${id}', '${password}', '${name}', '${address}', '${phoneNumber}', '${residentRegistrationNumber}', '${sex}', '${authority}', '${created}', '${updated}')`;

    connection.query(insertQuery,
        (error, results) => {
        if (error) {
            console.error('쿼리 실행 실패: ', error);
            res.status(500).send('서버 오류');
            return;
        }
    res.redirect('/');
    });
});
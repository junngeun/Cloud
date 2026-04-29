const mysql = require('mysql2')

// 3) DB 정보 기재 
const conn = mysql.createConnection({
    host : 'project-db-campus.smhrd.com',
    user : 'cloud_study_teacher_KJY',
    password : 'smhrd', 
    port : 3307,
    database : 'cloud_study_teacher_KJY'
})

// conn.connect()

conn.connect((err) => {
    if (err) {
        console.error('DB 연결 실패:', err)  // 에러 원인 확인
    } else {
        console.log('DB 연결 성공!')
    }
})
module.exports = conn;
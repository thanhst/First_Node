const { connection, executeQuery } = require('../Config/database');
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    static async create(email, password) {
        try {
            const sql = 'Insert into Users(email,password) values(?,?)'
            const data = [email, password]
            const result = await executeQuery(sql, data)
            if (result.results != '') {
                console.log('Thêm users này')
                console.log(result.results)
            }
        }
        catch (error) {
            throw error;
        }
    }
    static async update(email, password) {
        try {
            const sql = 'Update Users values(?) where email = ?'
            const data = [password, email]
            const result = await executeQuery(sql, data)
            if (result.results != '') {
                console.log('Sửa users này')
                console.log(result.results)
            }
        }
        catch (error) {
            throw error
        }
    }
    static async delete(email) {
        try {
            const sql = 'Delete from Users where email = ?'
            const data = [email]
            const result = await executeQuery(sql, data)
            if (result.results != '') {
                console.log('Xóa user này!')
                console.log(result.results)
            }
        }
        catch (error) {
            throw error
        }
    }
    static async findByEmail(email) {
        try {
            const sql = 'Select * from Users where email = ?'
            const data = [email]
            const result = await executeQuery(sql, data)
            if (result.results.length > 0) {
                // Tạo một đối tượng User từ dữ liệu trả về từ cơ sở dữ liệu
                const userData = result.results[0];
                const user = new User(userData.Email, userData.Password);
                console.log('Tìm thấy người dùng:');
                console.log(user);
                return user;
            }
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = User
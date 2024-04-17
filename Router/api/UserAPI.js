const axios = require('axios');

const BASE_URL = 'http://localhost:3001'; // Đổi port này nếu cần thiết

const UserApi = {
    async getAllUsers() {
        try {
            const response = await axios.get(`${BASE_URL}/user/all`);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Failed to fetch users');
        }
    },

    async createUser(userData) {
        try {
            const response = await axios.post(`${BASE_URL}/user/create`, userData);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Failed to create user');
        }
    },

    // Thêm các phương thức khác tương tự ở đây
};

module.exports = UserApi;

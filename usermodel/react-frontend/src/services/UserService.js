import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:8080/api/v2/users2";
//
//const PROPERTY_API_BASE_URL = "http://localhost:8080/api/v2/property";
class UserService {


    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL+"Create", user);
    }
/*
    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
*/
    getUserById2(userId){
        return axios.get(USER_API_BASE_URL + 'Get/' + userId);
    }

    updateUser2(user, userId){
        return axios.put(USER_API_BASE_URL + 'Update/' + userId, user);
    }

    deleteUser2(userId){
        return axios.delete(USER_API_BASE_URL + 'Delete/' + userId);
    }

    getPropertyByUseridPropertyName(propertyName, userId){
        return axios.get(USER_API_BASE_URL + '/' + userId+'/'+propertyName);
    }
}

export default new UserService()
import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:8080/api/v2/config";
//
//const PROPERTY_API_BASE_URL = "http://localhost:8080/api/v2/property";
class ConfigService {


    getConfigurations(){
        return axios.get(USER_API_BASE_URL);
    }

    createPropertyConfiguration(config){
        return axios.post(USER_API_BASE_URL+"Create", config);
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
    getConfigByName(propertyName){
        return axios.get(USER_API_BASE_URL + 'Get/' + propertyName);
    }

    updateConfig(config, propertyName){
        return axios.put(USER_API_BASE_URL + 'Update/' + propertyName, config);
    }

    deleteConfig(propertyName){
        return axios.delete(USER_API_BASE_URL + 'Delete/' + propertyName);
    }

    
}

export default new ConfigService()
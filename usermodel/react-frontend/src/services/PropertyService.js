import axios from 'axios';

const PROPERTY_API_BASE_URL = "http://localhost:8080/api/v2/property";

class PropertyService {

    getPropertysByUserid(userid){
        return axios.get(PROPERTY_API_BASE_URL+'GetAllByUserid/'+userid);
    }

    getPropertysByName(pname){
        return axios.get(PROPERTY_API_BASE_URL+'GetAllByPname/'+pname);
    }
    createProperty(property, userid){
        return axios.post(PROPERTY_API_BASE_URL+'Create/'+userid, property);
    }

    getPropertyById(propertyName, userid){
        return axios.get(PROPERTY_API_BASE_URL+'Get/' + userid+'/'+propertyName);
    }

    updateProperty(property, userid){
        return axios.put(PROPERTY_API_BASE_URL +'Update/' + userid, property);
    }

    deleteProperty(userid, propertyName){
        return axios.delete(PROPERTY_API_BASE_URL+'Delete/' + userid+'/'+propertyName);
    }

    
}

export default new PropertyService()
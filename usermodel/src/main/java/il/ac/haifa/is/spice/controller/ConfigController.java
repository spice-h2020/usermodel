package il.ac.haifa.is.spice.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import il.ac.haifa.is.spice.exception.ResourceNotFoundException;
import il.ac.haifa.is.spice.model.Configuration;

import il.ac.haifa.is.spice.repository.ConfigRepository;
import io.swagger.v3.oas.annotations.Operation;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class ConfigController {

    @Autowired
    private ConfigRepository configRepository;
    //Need to add security 
    
    // get all configs
    @Operation(summary = "Get all configurations for this usermodel")
    @GetMapping("/config")
    public List < Configuration > getAllConfigurations() {
    	return configRepository.findAll();
 //       return userModelRepository.findAll();
    }

    // create config
    @Operation(summary = "Create a property configuration for this usermodel")
    @PostMapping("/configCreate")
    public Configuration createConfiguration(@RequestBody Configuration config) {
    	
    	
        return configRepository.save(config);
    }

//    // get user by id rest api
//    @GetMapping("/users/{id}")
//    public ResponseEntity < User > getUserById(@PathVariable Long id) {
//        User user = userModelRepository.findById(id)
//            .orElseThrow(() -> new ResourceNotFoundException("user property not exist with id :" + id));
//        return ResponseEntity.ok(user);
//    }
//    
    @Operation(summary = "Get a property configurations by property name")
    @GetMapping("/configGet/{pname}")
    public ResponseEntity < Configuration > getConfigurationByPname(@PathVariable String pname) {
        Configuration config = configRepository.findByPname(pname)
            .orElseThrow(() -> new ResourceNotFoundException("Get Config: config not exist with id :" + pname));
        return ResponseEntity.ok(config);
    }
/*
    // get user by id rest api
    @PostMapping("/property/{userid}")
    public ResponseEntity < Property > getPropertyByUseridAndPropertyName(@PathVariable String userid, @RequestBody String pname) {
    	System.out.println("Property name =>"+pname);
    	pname=pname.substring(0,pname.length()-1);
        Property property = userModelRepository.findByUseridAndPname(userid, pname)
            .orElseThrow(() -> new ResourceNotFoundException("GetProperty: userid not exist with id :" + userid));
        return ResponseEntity.ok(property);
    }
*/
    
    
    // update user rest api

//    @PutMapping("/users/{id}")
//    public ResponseEntity < User > updateUser(@PathVariable Long id, @RequestBody User userDetails) {
//        User user = userModelRepository.findById(id)
//        		.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
//
//        user.setUserid(userDetails.getUserid());
//        user.setPassword(userDetails.getPassword());
//        user.setProperties(userDetails.getProperties());
//        
//        
//    
//
//        User updateduser = userModelRepository.save(user);
//        return ResponseEntity.ok(updateduser);
//    }
    @Operation(summary = "Update a property configurations by property name")
    @PutMapping("/configUpdate/{pname}")
    public ResponseEntity < Configuration > updateConfiguration(@PathVariable String pname, @RequestBody Configuration Details) {
        Configuration config = configRepository.findByPname(pname)
        		.orElseThrow(() -> new ResourceNotFoundException("Update: config not exist with id :" + pname));
/*
        user.setUserid(userDetails.getUserid());
        user.setPassword(userDetails.getPassword());
        user.setProperties(userDetails.getProperties());
        
 */       
    

        Configuration updatedconfig = configRepository.save(config);
        return ResponseEntity.ok(updatedconfig);
    }
    
    
  
    
//
//    // delete user rest api
//    @DeleteMapping("/users/{id}")
//    public ResponseEntity < Map < String, Boolean >> deleteUser(@PathVariable Long id) {
//        User user = userModelRepository.findById(id)
//            .orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
//
//        userModelRepository.delete(user);
//        Map < String, Boolean > response = new HashMap < > ();
//        response.put("deleted", Boolean.TRUE);
//        return ResponseEntity.ok(response);
//    }
    
    // delete user rest api
    @Operation(summary = "Delete a property configurations by property name")
    @DeleteMapping("/configDelete/{pname}")
    public ResponseEntity < Map < String, Boolean >> deleteConfiguration(@PathVariable String pname) {
        Configuration config = configRepository.findByPname(pname)
            .orElseThrow(() -> new ResourceNotFoundException("Delete Configuration: config not exist with name :" + pname));

        configRepository.delete(config);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

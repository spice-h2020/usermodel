package il.ac.haifa.is.spice.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import il.ac.haifa.is.spice.exception.ResourceNotFoundException;

import il.ac.haifa.is.spice.model.User;
import il.ac.haifa.is.spice.repository.UserRepository;

import io.swagger.v3.oas.annotations.Operation;

// import io.swagger.v3.oas.annotations.parameters.RequestBody;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class UserController {

    @Autowired
    private UserRepository userModelRepository;
    //Need to add security 
    
    // get all usermodels
    @Operation(summary = "Get all users, sorted by name")
    @GetMapping("/users2")
    public List < User > getAllUsers() {
    	return userModelRepository.findAllByOrderByUseridAsc();
 //       return userModelRepository.findAll();
    }

    // create user rest api
    @Operation(summary = "Create a new user Id and pwd should be anonimized")
    @PostMapping("/users2Create")
    public User createUser( @RequestBody  User user) {
    	
    	//user.setUserid(Anonimyzer.anonimyze(user.getUserid()));
    	//user.setPassword(Anonimyzer.anonimyze(user.getPassword()));
        return userModelRepository.save(user);
    }

//    // get user by id rest api
//    @GetMapping("/users/{id}")
//    public ResponseEntity < User > getUserById(@PathVariable Long id) {
//        User user = userModelRepository.findById(id)
//            .orElseThrow(() -> new ResourceNotFoundException("user property not exist with id :" + id));
//        return ResponseEntity.ok(user);
//    }
//    
    // get user by userid rest api
    @Operation(summary = "Get all the users properties by user name")
    @GetMapping("/users2Get/{userid}")
    public ResponseEntity < User > getUserByUserid(@PathVariable String userid) {
        User user = userModelRepository.findByUserid(userid)
            .orElseThrow(() -> new ResourceNotFoundException("Get User: userid not exist with id :" + userid));
        return ResponseEntity.ok(user);
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
    @Operation(summary = "Update  a user by username")
    @PutMapping("/users2Update/{userid}")
    public ResponseEntity < User > updateUser(@PathVariable String userid, @RequestBody User userDetails) {
        User user = userModelRepository.findByUserid(userid)
        		.orElseThrow(() -> new ResourceNotFoundException("Update: user not exist with id :" + userid));

        user.setUserid(userDetails.getUserid());
        user.setPassword(userDetails.getPassword());
        user.setProperties(userDetails.getProperties());
        
        
    

        User updateduser = userModelRepository.save(user);
        return ResponseEntity.ok(updateduser);
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
    @Operation(summary = "Delete a users by user name")
    @DeleteMapping("/users2Delete/{userid}")
    public ResponseEntity < Map < String, Boolean >> deleteUser(@PathVariable String userid) {
        User user = userModelRepository.findByUserid(userid)
            .orElseThrow(() -> new ResourceNotFoundException("Delete User: user not exist with id :" + userid));

        userModelRepository.delete(user);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

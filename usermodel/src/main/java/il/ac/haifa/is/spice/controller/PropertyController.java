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
import il.ac.haifa.is.spice.model.Property;

import il.ac.haifa.is.spice.repository.PropertyRepository;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    // 
    @Operation(summary = "Get all properties for all users")
    @GetMapping("/property")
    public List < Property> getAllPropertys() {
        return propertyRepository.findAll();
    }
    
    // get all properties of a certain property name
    @Operation(summary = "Get all properties with a certain property name")
    @GetMapping("/propertyGetAllByPname/{pname}")
    public List< Property > getAllPropertyByPname(@PathVariable String pname) {
    
        List<Property> propertys = propertyRepository.findByPname(pname);
  //          .orElseThrow(() -> new ResourceNotFoundException("GetProperty: userid not exist with id :" + userid));
        return propertys;
    }

    // create user rest api
    @Operation(summary = "Add a new property for a user")
    @PostMapping("/propertyCreate/{userid}")
    public Property createProperty(@PathVariable String userid, @RequestBody Property property) {
    	
    	
        return propertyRepository.save(property);
    }

//    // get user by id rest api
//    @GetMapping("/users/{id}")
//    public ResponseEntity < User > getUserById(@PathVariable Long id) {
//        User user = userModelRepository.findById(id)
//            .orElseThrow(() -> new ResourceNotFoundException("user property not exist with id :" + id));
//        return ResponseEntity.ok(user);
//    }
//    
    // get user by id rest api
    @Operation(summary = "Get all properties for a specific user")
    @GetMapping("/propertyGetAllByUserid/{userid}")
    public List< Property > getAllPropertyByUserid(@PathVariable String userid) {
    
        List<Property> propertys = propertyRepository.findByUserid(userid);
  //          .orElseThrow(() -> new ResourceNotFoundException("GetProperty: userid not exist with id :" + userid));
        return propertys;
    }
   
   

    
    @Operation(summary = "Get a specific property for a specific user")
    @GetMapping("/propertyGet/{userid}/{pname}")
    public ResponseEntity < Property > getPropertyByUseridAndPropertyName(@PathVariable String userid, @PathVariable String pname) {
    	System.out.println("Property name =>"+pname);
    	//pname=pname.substring(0,pname.length()-1);
        Property property = propertyRepository.findByUseridAndPname(userid, pname)
            .orElseThrow(() -> new ResourceNotFoundException("GetProperty: userid not exist with id :" + userid));
        return ResponseEntity.ok(property);
    }

    
    
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
    @Operation(summary = "Update a specific property for a specific user")
    @PutMapping("/propertyUpdate/{userid}")
    public ResponseEntity < Property > updateProperty(@PathVariable String userid, @RequestBody Property propertyDetails) {
        Property property = propertyRepository.findByUseridAndPname(userid, propertyDetails.getPname())
        		.orElseThrow(() -> new ResourceNotFoundException("Update: user not exist with id :" + userid));
/*
        user.setUserid(userDetails.getUserid());
        user.setPassword(userDetails.getPassword());
        user.setProperties(userDetails.getProperties());
 */      
        property.setPname(propertyDetails.getPname());
        property.setPvalue(propertyDetails.getPvalue());
        property.setContext(propertyDetails.getContext());
        property.setSource(propertyDetails.getSource());

        Property updatedProperty = propertyRepository.save(property);
        return ResponseEntity.ok(updatedProperty);
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
    
    // 
    @Operation(summary = "Delete a specific property for a specific user")
    @DeleteMapping("/propertyDelete/{userid}/{pname}")
    public ResponseEntity < Map < String, Boolean >> deleteUser(@PathVariable String userid, @PathVariable String pname) {
    //	pname=pname.substring(0,pname.length()-1);
    	final String pname2 = pname;
        Property property = propertyRepository.findByUseridAndPname(userid, pname)
            .orElseThrow(() -> new ResourceNotFoundException("Delete Property: user or property not exist with id :" + userid+ ":"+ pname2));

        propertyRepository.delete(property);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

package il.ac.haifa.is.spice.model;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import il.ac.haifa.is.spice.security.Anonimyzer;

@Entity
@Table(name = "users", indexes=@Index(columnList = "user_anonimyzed"))
public class User extends AuditModel {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    
    @Column(name = "user_anonimyzed")
    private String userid;

    @Column(name = "password")
    private String password;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "userid", referencedColumnName = "user_anonimyzed")
    private Set<Property> properties;
    
   
    
    public User() {
    	this.properties = new HashSet<Property>();

    }

    public User(String userid, String password) {
		super();
		this.properties = new HashSet<Property>();
		this.userid = Anonimyzer.anonimyze(userid);
		this.password = password;
		
		
	}

	

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String category) {
		this.password = category;
	}



	public Set<Property> getProperties() {
		return properties;
	}

	public void setProperties(Set<Property> properties) {
		this.properties = properties;
	}
    
}
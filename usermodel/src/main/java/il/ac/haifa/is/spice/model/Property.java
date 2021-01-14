package il.ac.haifa.is.spice.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;



@Entity
@Table(name = "propertys")
//@SecondaryTable(name = "propertyconstraints", pkJoinColumns=@PrimaryKeyJoinColumn(name="property_name", referencedColumnName="property_name"))
public class Property extends AuditModel{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name="userid")
    private String userid;
  
    
	/*
	 * @Column(table="propertyconstraints", name="category") private Category
	 * category;
	 */
    
    @Column(name = "property_name")
    private String pname;

    @Column(name = "property_value")
    private String pvalue;

    @Column(name = "source")
    private String source;
    
    @Column(name = "property_context")
    private String context;
    
    
    
    public Property() {

    }

    public Property(String userid, String propertyName, String propertyValue, String source,
			String context) {
		super();
		this.userid = userid;
	
		this.pname = propertyName;
		this.pvalue = propertyValue;
		this.source = source;
		this.context = context;
	
	}

	
 

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String propertyName) {
		this.pname = propertyName;
	}

	public String getPvalue() {
		return pvalue;
	}

	public void setPvalue(String propertyValue) {
		this.pvalue = propertyValue;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getContext() {
		return context;
	}

	public void setContext(String comtext) {
		this.context = comtext;
	}

	
}
package il.ac.haifa.is.spice.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "propertyconstraints")
public class Configuration extends AuditModel {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
   
    @Column(name = "category")
    private Category category;

    @Column(name = "property_name")
    private String pname;
    
    @Column(name = "property_type")
    private String ptype;

    @Column(name = "property_constraint")
    private String constraint;
    
    @Column(name = "property_strategy")
    private AggregationStrategy aggregationStrategy;

  
    
    public Configuration() {

    }

    public Configuration(Category category, String propertyName, String propertyType, String propertyConstraint,  AggregationStrategy strategy) {
		super();
		
		this.category = category;
		this.pname = propertyName;
		this.ptype = propertyType;
		this.aggregationStrategy = strategy;  //LAST, ACCUMULATE, ACCUMULATED_WEIGHEDTIME
		this.constraint = propertyConstraint;
		
	
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public AggregationStrategy getAggregationStrategy() {
		return aggregationStrategy;
	}

	public void setAggregationStrategy(AggregationStrategy aggregationStrategy) {
		this.aggregationStrategy = aggregationStrategy;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPtype() {
		return ptype;
	}

	public void setPtype(String ptype) {
		this.ptype = ptype;
	}

	public String getConstraint() {
		return constraint;
	}

	public void setConstraint(String constraint) {
		this.constraint = constraint;
	}

	
	

	
    
}
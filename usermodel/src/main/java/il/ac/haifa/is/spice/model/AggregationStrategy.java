package il.ac.haifa.is.spice.model;

public enum AggregationStrategy {
	LATEST("L","Latest"), 
	AVERAGE("A","Average"), 
	DECAY("D","Decay"), 
	WEIGHTED("W","Weighted");
	
	
	
	
	
	DisplayableEnum displayer;

    private AggregationStrategy(String code, String name) {
    	displayer = new AbstractDisplayableEnum(code,name);
        
    }

    public String getCode() {
        return displayer.getCode();
    }

	public String getDisplayName() {
		return displayer.getDisplayName();
	}
    
	public String toString() {
		return displayer.getDisplayName();
	}

}

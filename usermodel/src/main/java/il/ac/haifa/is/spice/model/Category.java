package il.ac.haifa.is.spice.model;



public enum Category implements DisplayableEnum {
	
	IDENTITY("ID","Identity"),
    DEMOGRAPHICS("DM", "Demographics"),
    TRAITS("TRT","Traits"),
	BELIEFS("BLF","Beliefs"),
	INTERESTS("INT","Interests"),
	SKILLS("SK","Skills"),
	COMMUNITIES("CMM","Communities"),
	CURRENTCONTEXT("CCNTX","CurrentContexts");

	
	DisplayableEnum displayer;

    private Category(String code, String name) {
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

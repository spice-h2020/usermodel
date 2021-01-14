package il.ac.haifa.is.spice.model;

public class AbstractDisplayableEnum implements DisplayableEnum {
	
	
	private String code;
	private String displayName;
	

    public AbstractDisplayableEnum(String code, String name) {
        this.code = code;
        this.displayName = name;
    }

    @Override
	public String getCode() {
        return code;
    }

	@Override
	public String getDisplayName() {
		return displayName;
	}
    
	public String toString() {
		return displayName;
	}

}

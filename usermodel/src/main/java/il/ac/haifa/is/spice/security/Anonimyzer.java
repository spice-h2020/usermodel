package il.ac.haifa.is.spice.security;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public  class Anonimyzer {
	
	public static String anonimyze(String in) {
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("SHA-1");
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			md=null;
			return "XXXX";
		}
		byte[] d = md.digest(in.getBytes());
		
		String str = javax.xml.bind.DatatypeConverter.printBase64Binary(d);
		str = str.substring(0, 10);
		str.replaceAll("[^A-Za-z0-9]", "0");
		return str;
	}

}

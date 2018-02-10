package neu.msd.team208.Helper;

/**
 * Helper functions used for HomeService,
 * which is Login and Registration of users.
 * @author vihabidre
 *
 */
public final class RegisterUtils {
	
	private RegisterUtils() {}
	
	/**
	 * To check if the user already exists in the system.
	 * @param userName
	 * @return
	 */
	public static boolean userExists(String userName) {
		return false;
	}
	
	/**
	 * To check if the user has entered a valid email ID.
	 * @param emailId
	 * @return
	 */
	public static boolean validEmailID(String emailId) {
		return false;
	}
	
	/**
	 * To check is a valid password has been entered during registration.
	 * @param password
	 * @return
	 */
	public static boolean validPassword(String password) {
		return false;
	}
	
	/**
	 * To check if the username and password match
	 * @param userName
	 * @param password
	 * @return
	 */
	public static boolean passwordMatched(String userName, String password) {
		return false;
	}
	
	/**
	 * To check is the User is a Professor
	 * @param userName
	 * @return
	 */
	public static boolean isProfessor(String userName) {
		return false;
	}
	
	/**
	 * To check if the user is a TA.
	 * @param userName
	 * @return
	 */
	public static boolean isTA(String userName) {
		return false;
	}

}

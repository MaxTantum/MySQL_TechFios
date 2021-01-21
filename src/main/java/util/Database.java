package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Database {

	public static String get(String colomnName) throws ClassNotFoundException, SQLException {
		// Setting properties for MySQL
		Class.forName("com.mysql.cj.jdbc.Driver");
		// creating a connection to your local database
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/techfios", "root", "admin777");
		// empowering the con reference variable to execute queries
		Statement smt = con.createStatement();
		// delivering the SQL query
		ResultSet rs = smt.executeQuery("select * from users");
		
		while(rs.next()) {
			return rs.getString(colomnName);
		}
		return null;
		}
}

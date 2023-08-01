package InventorySale;

import java.sql.*;
import java.util.*;

public class AddSupplier {

	private static final String DB_URL = "jdbc:mysql://localhost:3306/InventorySales?createDatabaseIfNotExist=true";

	public static void addSupplierDetails() throws SQLException {
		
		Supplier viewSupplier = new Supplier();
		Scanner scanner = new Scanner(System.in);
		
				System.out.println("Enter your Name : ");
				viewSupplier.setName(scanner.nextLine());
				System.out.print("Enter your address : ");
				viewSupplier.setAddress(scanner.nextLine());
				System.out.print("Enter your phoneNumber : ");
				viewSupplier.setPhoneNumber(Long.parseLong(scanner.nextLine()));
				viewSupplier.setRole("supplier");
				System.out.print("Enter your email : ");
				viewSupplier.setEmail(scanner.nextLine());
				System.out.print("Enter your password : ");
				viewSupplier.setPassword(scanner.nextLine());

				try (Connection connection1 = DriverManager.getConnection(DB_URL, "root", "Surya@07");
						PreparedStatement preparedStatement1 = connection1.prepareStatement(
								"INSERT INTO supplier (name,address,Mobile_number,role,email,password) VALUES (?, ?, ?, ?,?,?)")) {
					preparedStatement1.setString(1, viewSupplier.getName());
					preparedStatement1.setString(2, viewSupplier.getAddress());
					preparedStatement1.setLong(3, viewSupplier.getPhoneNumber());
					preparedStatement1.setString(4, viewSupplier.getRole());
					preparedStatement1.setString(5, viewSupplier.getEmail());
					preparedStatement1.setString(6, viewSupplier.getPassword());


					

					preparedStatement1.executeUpdate();

					System.out.println("Successfully supplier registered !!");		

		}
	}
                
}

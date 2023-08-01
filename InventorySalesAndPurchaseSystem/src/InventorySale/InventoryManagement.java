package InventorySale;

import java.sql.*;
import java.util.*;

public class InventoryManagement {

	public static List<Inventory> getAllitems() throws SQLException {

		List<Inventory> inventory = new ArrayList();
		Connection connection = DB.connect();

		Statement statement = connection.createStatement();

		String query = "select * from inventory";

		ResultSet rs = statement.executeQuery(query);

		while (rs.next()) {
			Inventory item = new Inventory(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4),
					rs.getInt(5), rs.getInt(6));
			inventory.add(item);
		}

		return inventory;
	}

	public static boolean updateStock(String item_id, int item_quantity) throws SQLException {

		Connection connection = DB.connect();
		PreparedStatement pstmt = connection.prepareStatement(Query.updateItem);

		pstmt.setInt(1, item_quantity);
		pstmt.setString(2, item_id);

		int res = pstmt.executeUpdate();

		if (res == 1) {
			return true;
		}

		return false;
	}

	public static Inventory itemExist(String id) throws SQLException {

		Connection connection = DB.connect();
		PreparedStatement pstmt = connection.prepareStatement(Query.itemExists);

		pstmt.setString(1, id);

		ResultSet res = pstmt.executeQuery();

		Inventory inventory = new Inventory();

		while (res.next()) {
			inventory.setItem_id(res.getString(1));
			inventory.setItem_name(res.getString(2));
			inventory.setBrand(res.getString(3));
			inventory.setSupplier_name(res.getString(4));
			inventory.setPrice(res.getInt(5));
			inventory.setQuantity(res.getInt(6));
		}

		return inventory;

	}

	public static Boolean purchaseOrder(ArrayList<Inventory> arr) throws SQLException {

		Connection connection = DB.connect();

		int limit = arr.size();

		int count = 0;

		for (Inventory element : arr) {
			PreparedStatement pstmt = connection.prepareStatement(Query.updateItem);

			PreparedStatement statement = connection.prepareStatement(Query.itemQuantity);
			statement.setString(1, element.getItem_id());

			ResultSet rs = statement.executeQuery();

			int original = 0;
			while (rs.next()) {
				original = rs.getInt(1);
			}

			pstmt.setInt(1, original - element.getQuantity());
			pstmt.setString(2, element.getItem_id());
			int res = pstmt.executeUpdate();

			if (res == 1) {
				count++;
			}
		}

		if (count == limit) {
			return true;
		}

		return false;
	}

}

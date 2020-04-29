package com.bit.web.admin;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit.web.util.Data;
import com.bit.web.util.Messenger;

@Repository
public class AdminDaoImpl implements AdminDao {

	@Override
	public void insert(Admin admin) {
		System.out.println("3. AdminServiceImpl register");
		try {
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(
									new FileWriter(
									new File(Data.ADMIN_PATH.toString()+Data.LIST+Data.CSV),true));
			writer.write(admin.toString());
			writer.newLine();
			writer.flush();
			System.out.println("4. File Input Success");
		} catch (Exception e) {
			System.out.println(Messenger.FILE_WRITE_ERROR.toString());
		}
		
	}

	@Override
	public List<Admin> selectAll() {
		List<Admin> list = null;
		try {
			
		} catch (Exception e) {

		}finally {
			
		}
		
		return list;
	}

	@Override
	public Admin selectOne(String employNumber) {
		Admin admin = null;
		try {
			
		} catch (Exception e) {

		}finally {
			
		}
		return admin;
	}

	@Override
	public void update(Admin admin) {
		try {
			
		} catch (Exception e) {

		}finally {
			
		}


	}

	@Override
	public void delete(Admin admin) {
		try {
			
		} catch (Exception e) {

		}finally {
			
		}

		
	}

}

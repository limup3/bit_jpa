package com.bit.web.admin;
import org.springframework.stereotype.Service;

@Service
public interface AdminService {

	public Admin[] list();
	public Admin detail(Admin member);
	public Admin[] SearchByName(String name);
	public int count();
	public int count(String name);
	public boolean login(Admin member);
	public void update(Admin member);
	public void delete(Admin member);
	public void add(Admin member);
	
}

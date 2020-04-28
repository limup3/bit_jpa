package com.bit.web.admin;

import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

	private Admin[] members;
	private int count;
	
	public AdminServiceImpl() {
		members = new Admin[5];
		count = 0;
	
	}
	
	@Override
	public Admin[] list() {
		return members;
	}

	@Override
	public Admin detail(Admin member) {
		Admin returnMember = null;
		
		for (int i = 0; i < count; i++) {
			
			if(member.getUserid().equals(members[i].getUserid())) {
				returnMember = new Admin();
				returnMember = members[i];	
			}
			
			
		}
		
		return returnMember;
	}

	@Override
	public Admin[] SearchByName(String name) {
		Admin[] returnMembers =null;
		int searchcount = 0;
		
		if(searchcount != 0) {
			returnMembers = new Admin[count(name)];
			int j = 0;
			for (int i = 0; i < count; i++) {
				if(name.equals(members[i].getName())) {
					returnMembers[j] = members[i];
					j++;	
					if(searchcount == 0) {
						break;
					}
				}
				
			}
			
			
		}
		return returnMembers;
	}
	
	@Override
	public void add(Admin member) {	
		members[count] = member;
		count++;
	}
	

	@Override
	public int count() {
		return count;
	}

	@Override
	public int count(String name) {

		int returnCount = 0;
		
		for (int i = 0; i < count; i++) {
			if(name.equals(members[i].getName())) {
				returnCount++;
			}
			
		}
		
		
		
		return returnCount;
	}

	@Override
	public boolean login(Admin member) {
		
		boolean ok = false;
		
		for (int i = 0; i < count; i++) {
			if(member.getUserid().equals(members[i].getUserid()) &&
					member.getPasswd().equals(members[i].getPasswd())) {
				ok = true;
				break;
			}
		}
		return ok;
		
	}

	@Override
	public void update(Admin member) {
		
		for (int i = 0; i < count; i++) {
			if(member.getUserid().equals(members[i].getUserid())) {
				members[i].setPasswd(member.getPasswd());
				break;
			}
		}

		
		
	}

	@Override
	public void delete(Admin member) {
for (int i = 0; i < count; i++) {
			
			if(member.getUserid().equals(members[i].getUserid()) &&
					member.getPasswd().equals(members[i].getPasswd())) {
				
				members[i] = members[count-1];
				members[count-1] = null;
				count--;
				
				
			}
		}
		}


	

}

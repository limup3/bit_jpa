package com.bit.web.user;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class User {

	private String userid,passwd,name,ssn,addr, profile, email, registerDate;
	@Override
	public String toString() {
		
		return String.format("%s,%s,%s,%s,%s,%s,%s,%s", userid,passwd,name,ssn,addr, profile, email, registerDate);
	}
}

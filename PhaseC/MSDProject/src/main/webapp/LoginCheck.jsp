<%@page contentType="text/html" pageEncoding="UTF-8"%> 
<html> 
	<head> 
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
		<title>Plagiarism Detector</title> 
	</head> 
	<body> 
		<% 
			String username=request.getParameter("username"); 
			String password=request.getParameter("password"); 

			if((username.equals("admin") && password.equals("admin"))) {
				session.setAttribute("username",username); 	
				response.sendRedirect("Home.jsp"); 
	    	} else 
				response.sendRedirect("Error.jsp"); 
		%> 
	</body> 
</html>


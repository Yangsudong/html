<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
        String name = request.getParameter("userID");
        String pass = request.getParameter("pass");
        String name = request.getParameter("userName");
        String name = request.getParameter("age");
    %>
    <table border="1">
        <tr>
            <td>사용자아이디</td><td><%=userID%></td>
        </tr>
        <tr>
            <td>패스워드</td><td><%=pass%></td>
        </tr>
        <tr>
            <td>사용자이름</td><td><%=userName%></td>
        </tr>
        <tr>
            <td>사용자나이</td><td><%=age%></td>
        </tr>
        <tr>
            <td>Likeit</td>
            <td><progress value=<%=likeit%> max="100"></progress><%=likeit%>%</td>
        </tr>
    </table>
</body>
</html>
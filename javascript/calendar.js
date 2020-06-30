var dayAry = ['일', '월', '화', '수', '목', '금', '토'];
var daysAry = [];

document.write('<table border="1">');
document.write('<tr>');
for(var i=0; i<dayAry.length; i++) {
    document.write('<th>' + dayAry[i] + '</th>');
}
for(var i=1; i<30; i++) {
    if(i%7==0){    
        for(var j=1; j<=7; j++){
            if(i%7==0)
            document.write('<td>' + j + '</td>');
        }
    }
    document.write('</tr>');
}
document.write('</table>');
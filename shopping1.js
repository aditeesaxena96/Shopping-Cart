var name=sessionStorage.getItem("billable_items");
let totaldata ='<td colspan="3" >'+name+'</td>';
name+=totaldata;
document.getElementById("show1").innerHTML=totaldata;
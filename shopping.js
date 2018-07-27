var shopping_fruit=
[
{ name: "Apple",
  category : "fruit",
  price : "100",
  qty : "0"
},
{ name : "Banana",
  category : "fruit",
  price : "30",
  qty : "0"
},
{ name: "Blackberry",
  category : "fruit",
  price : "80",
  qty : "0"
},
{ name : "Black Plum",
  category : "fruit",
  price : "110",
  qty : "0"
},
{ name : "Grapes",
  category : "fruit",
  price : "60",
  qty : "0"
},
{ name : "Orange",
  category : "fruit",
  price : "80",
  qty : "0"
},
{ name : "Guavas",
  category : "fruit",
  price : "40",
  qty : "0"
},
{ name : "Litchi",
  category : "fruit",
  price : "50",
  qty : "0"
},
{ name : "Mango",
  category : "fruit",
  price : "60",
  qty : "0"
},
{ name : "Pineapple",
  category : "fruit",
  price : "120",
  qty : "0"
}
]
var shopping_vegetable=
[
{ name : "Beetroot",
  category : "vegetable",
  price : "40",
  qty : "0"
},
{ name : "Bitter Gourd",
  category : "vegetable",
  price : "30",
  qty : "0"
},
{ name : "Bottle Gourd",
  category : "vegetable",
  price : "15",
  qty : "0"
},
{ name : "Cabbage",
  category : "vegetable",
  price : "20",
  qty : "0"
},
{ name : "Capsicum",
  category : "vegetable",
  price : "40",
  qty : "0"
},
{ name : "Carrot",
  category : "vegetable",
  price : "30",
  qty : "0"
},
{ name : "Cluster Beans",
  category : "vegetable",
  price : "30",
  qty : "0"
},
{ name : "Cucumber",
  category : "vegetable",
  price : "10",
  qty : "0"
},
{ name : "Onion",
  category : "vegetable",
  price : "30",
  qty : "0"
},
{ name : "Garlic",
  category : "vegetable",
  price : "50",
  qty : "0"
}
]
var shopping_spices=
[
{ name : "Asafoetida",
  category : "spices",
  price : "40",
  qty : "0"
},
{ name : "Aniseed",
  category : "spices",
  price : "20",
  qty : "0"
},
{ name : "Barley",
  category : "spices",
  price : "35",
  qty : "0"
},
{ name : "Bay Leaf",
  category : "spices",
  price : "40",
  qty : "0"
},
{ name : "Black Pepper",
  category : "spices",
  price : "30",
  qty : "0"
},
{ name : "Cardamom",
  category : "spices",
  price : "20",
  qty : "0"
},
{ name : "Carom Seed",
  category : "spices",
  price : "10",
  qty : "0"
},
{ name : "Cinnamon",
  category : "spices",
  price : "30",
  qty : "0"
},
{ name : "Clove",
  category : "spices",
  price : "10",
  qty : "0"
},
{ name : "Coriander",
  category : "spices",
  price : "20",
  qty : "0"
}
]
var shopping_dairy=
[
{ name : "Cheese",
  category : "dairy",
  price : "70",
  qty : "0"
},
{ name : "Yogurt",
  category : "dairy",
  price : "40",
  qty : "0"
},
{ name : "Curd",
  category : "dairy",
  price : "30",
  qty : "0"
},
{ name : "Sour Cream",
  category : "dairy",
  price : "80",
  qty : "0"
},
{ name : "Paneer",
  category : "dairy",
  price : "90",
  qty : "0"
},
{ name : "Milk",
  category : "dairy",
  price : "50",
  qty : "0"
},
{ name : "Lassi",
  category : "dairy",
  price : "30",
  qty : "0"
},
{ name : "Khoa",
  category : "dairy",
  price : "120",
  qty : "0"
},
{ name : "Ghee",
  category : "dairy",
  price : "150",
  qty : "0"
},
{ name : "Evaporated milk",
  category : "dairy",
  price : "170",
  qty : "0"
}
]
/* Createdata(shopping)

function Createdata(shopping)
{ 
var index;
var html="<table><tr id='head'><th>Name</th><th>Category</th><th>MRP</th><th>Quantity</th></tr>"; 
for(i=0;i<shopping.length;i++)
    {           
           html+="<tr><td>"+shopping[i].name+"</td> <td>"+shopping[i].category+"</td><td> "+shopping[i].price+"</td> <td><input type='number' name='number'></td></tr>";
    }
    html+="</table>"
    document.getElementById("showData").innerHTML = html;
}*/
var arr1=shopping_fruit.concat(shopping_vegetable);
var arr2=arr1.concat(shopping_spices);
var arr3=arr2.concat(shopping_dairy);
//var arr=[shopping_fruit,shopping_spices,shopping_vegetable,shopping_dairy];
function Search()
{
var search1=document.getElementById('data').value;
var reg = new RegExp(search1, "i");
//var mat=reg.test(search1,"i");
//console.log(search1);
var html="";
var html="<table><tr id='head'><th>Name</th><th>Category</th><th>MRP</th><th>Quantity</th></tr>";
for(var i=0;i<arr3.length;i++)
{
//console.log((shopping_fruit[i].name));
var fr=arr3[i].name;
 //console.log(fr);
var res=reg.test(fr);
console.log(res);
if(res)
{
   html+="<tr><td>"+arr3[i].name+"</td> <td>"+arr3[i].category+"</td><td> "+arr3[i].price+"</td> <td><input type='number' name='number' id='"+arr3[i].name+"'></td></tr>";
   console.log("hello");
}
}
html+="</table>"
document.getElementById("showData").innerHTML = html;
}

function Add()
{
    for(var add_index=0;add_index<arr3.length;add_index++)
    {
    if(arr3[add_index].qty>0)
    {
        console(arr3[add_index]);
    }
}
}

function Reset()
{
    document.getElementById('data').value="";
    document.getElementById('showData').innerHTML="";
    for(let reset_index=0;reset_index<arr3.length;reset_index++)
    {
        arr3[reset_index].qty=0;
    }
}

function Add()
{
    var add_items="";
    var add_items="<table border='1'><tr id='head'><th>Name</th><th>Quantity</th></tr>";
    for(let add_index=0;add_index<arr3.length;add_index++)
    {
        if(document.getElementById(arr3[add_index].name)!=null){
        arr3[add_index].qty=document.getElementById(arr3[add_index].name).value;

        if(arr3[add_index].qty>0)
        {
            add_items+="<tr><td>"+arr3[add_index].name+"</td><td>"+arr3[add_index].qty+"</td></tr>";
        }
    }
    }
    add_items+="</table>"
    document.getElementById("add_data").innerHTML=add_items;
}

function Checkout()
{
    var add_items="";
    var add_items="<table border='1'><tr id='head'><th>Name</th><th>Quantity</th></tr>";
    for(let add_index=0;add_index<arr3.length;add_index++)
    {
        if(document.getElementById(arr3[add_index].name)!=null){
        arr3[add_index].qty=document.getElementById(arr3[add_index].name).value;

        if(arr3[add_index].qty>0)
        {
            add_items+="<tr><td>"+arr3[add_index].name+"</td><td>"+arr3[add_index].qty+"</td></tr>";
        }
    }
    }
    add_items+="</table>"
    document.getElementById("pay").innerHTML=add_items;
}
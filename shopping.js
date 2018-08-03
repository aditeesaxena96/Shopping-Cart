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
var arr1=shopping_fruit.concat(shopping_vegetable);
var arr2=arr1.concat(shopping_spices);
var arr3=arr2.concat(shopping_dairy);

 var add_items="<tr id='head'><th>Name</th><th>Quantity</th></tr>";
 var checkout_items="<tr><th>Name</th><th>Category</th><th>Quantity</th><th>Price</th></tr>";
function Search()
{
var search1=document.getElementById('data').value;
var reg = new RegExp(search1, "i");
var html="";
var html="<table><tr id='head'><th>Name</th><th>Category</th><th>MRP</th><th>Quantity</th></tr>";
for(var i=0;i<arr3.length;i++)
{
var fr=arr3[i].name;
var res=reg.test(fr);
if(res)
{
   html+="<tr><td>"+arr3[i].name+"</td> <td>"+arr3[i].category+"</td><td> "+arr3[i].price+"</td> <td><input type='number' name='number  max='15' id='"+arr3[i].name+"'></td></tr>";
  
}
}
html+="</table>"
document.getElementById("showData").innerHTML = html;
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
var total=0;
var sum_quantity=0;
function Add()
{
    for(let add_index=0;add_index<arr3.length;add_index++)
    {
        if(document.getElementById(arr3[add_index].name)!=null ){
        arr3[add_index].qty=document.getElementById(arr3[add_index].name).value;
        if(arr3[add_index].qty>0)
        {
            add_items+="<tr><td>"+arr3[add_index].name+"</td><td>"+arr3[add_index].qty+"</td></tr>";
            checkout_items+="<tr><td>"+arr3[add_index].name+"</td><td>"+arr3[add_index].category+"</td><td>"+arr3[add_index].qty+"</td><td>"+arr3[add_index].price+"</td></tr>";
            total+= arr3[add_index].qty * arr3[add_index].price;
        }}
    }
   
    document.getElementById("add_data").innerHTML=add_items;  
}

function Checkout()
{
  checkout_items+="<tr><td colspan='3'>Total</td><td>"+total+"</td></tr>";
   var amt;
   var billable_items;
   sessionStorage.setItem("billable_items", checkout_items);
   sessionStorage.setItem("amt", total);
}
var json=[{
    "name":"jothiees",
    "age": 26,
    "sex":"male"
},
{
    "name":"vicky",
    "age": 26,
    "sex":"male"
}]
for(i=0;i<json.length;i++){
console.log(json[i].name,json[i].age,json[i].sex);
}
for(var a in json){
    console.log(json[a].name);
    console.log(json[a].age);
    console.log(json[a].sex);
}
var todolist = document.querySelector(".items").innerHTML;
var button = document.querySelector(".button");
var dupliItems = [];
var newtask = "";
dupliItems.push("Пробный пункт");


button.addEventListener('click', function()
{

newtask = document.getElementById("newitem").value;
//console.log(typeof(newtask));
if (newtask == '')
{alert("Вы ничего не ввели, пожалуйста, введите задачу");}
else
{
			dupliItems.push(newtask);
      var cleanCheck = true;
			for (var i = 0; i < dupliItems.length; i++)
				{
								if (dupliItems[i-1] == newtask)
								{
                  cleanCheck = false;
									var approve = confirm("Такая запись уже есть, подтвердите, чтобы добавить еще");
									if (approve == true)
									{
									var updlist = todolist + "<li>" + newtask + "</li>";
									document.querySelector(".items").innerHTML = updlist;
									todolist = updlist;
                  updateItems();
									break;
									}
									else
									{
									var updlist = todolist;
									document.querySelector(".items").innerHTML = updlist;
									updateItems();
									}
								}
            }
								if (cleanCheck == true)
								{
									var updlist = todolist + "<li>" + newtask + "</li>";
									document.querySelector(".items").innerHTML = updlist;
									todolist = updlist;
									updateItems();
								}



}

});


function updateItems () {
var itemArray = document.getElementsByTagName("li");

for (var i = 0; i < itemArray.length; i++)
{
  itemArray[i].addEventListener("click", toggle)
}
};
function toggle (){
  this.classList.toggle("checkedItem");
}
/*
function checkForDuplicates()
{
  for (var i = 0; i < dupliItems.length - 1; i++)
  {
    if (dupliItems[i] == document.getElementById("newitem").value)
    {alert("Есть дублирующиеся задачи");}
  }
}
*/

var app = angular.module('myApp', []);

var quantidade=0; 
var despesa = 0; 

var produtos = [
	{id:1, creator:"TANYA TAYLOR", description: "Baby Doll", price: "500 $", image: "images/1.jpg", old_price: "1000 $", promotion: "50% off"},
	{id:2, creator:"FORTE COUTURE", description: "varsity bomber jacket", price: "790 $", image: "images/2.jpg",promotion: ""},
	{id:3, creator:"FENDI", description: "fox fur collar coat", price: "120 $", image: "images/3.jpg",promotion: ""},
	{id:4, creator:"QUICKSILVER", description: "SHORTS", price: "340 $", image: "images/4.jpg",promotion: ""},
	{id:5, creator:"FENDI", description: "SHIRT", price: "510 $", image: "images/5.jpg",promotion: ""}
];

app.controller('farfetchController', function ($scope, $compile) {
	$scope.products = produtos; 

	$scope.add =function(id)
	{
		var creator = $(".MyBag #id"+id+" .creator").text();
		var description = $(".MyBag #id"+id+" .description").text();
		var price =  $(".MyBag #id"+id+" .pricefinal").text();
		var oldprice =  $(".MyBag #id"+id+" .oldprice").text();
		var promotion =  $(".MyBag #id"+id+" .promotion").text();
		console.log(price);
		
		if(promotion.length !=2)
		{
			$('.bag').append('<div id="id'+id+'" class="product"><img  class="social" style="text-align:center" src="images/'+id+'.jpg"  class="img-rounded img-responsive" ><div class="creator" >'+creator+'</div><p><div class="description"> </div><p><div class="description">'+description+' </div><p><div class="price"><div class="oldprice" > '+oldprice+'</div><div class="pricefinal pricefinalred" ng-show="product.old_price">'+price+'</div> <div class="promotion" >'+promotion+'</div> </div><button onclick="remove('+id+')"> Remove from Bag </button> </div>');	
		}
		
		else
		{
			$('.bag').append('<div id="id'+id+'" class="product"><img  class="social" style="text-align:center" src="images/'+id+'.jpg"  class="img-rounded img-responsive" ><div class="creator" >'+creator+'</div><p><div class="description"> </div><p><div class="description">'+description+' </div><p><div class="price"><div class="pricefinal" >'+price+'</div> </div><button onclick="remove('+id+')"> Remove from Bag </button> </div>');
		}

		 $(".MyBag #id"+id+" button").attr("disabled", true);
		 quantidade++; 
		 
		 $('.quantidade').html('Quantity:'+quantidade);
		 
		 despesa = despesa+ parseInt($(".MyBag #id"+id+" .pricefinal").text().split(" ")[0]);
		 console.log(despesa);
		 
		  $('.gpb').html('GBP:<b>'+despesa+'$</b>');

	};
});


function remove(id)
{
	$('.bag #id'+id).hide();

	$(".MyBag #id"+id+" button").attr("disabled", false);

	quantidade--; 

	despesa = despesa- parseInt($(".bag #id"+id+" .pricefinal").text().split(" ")[0]);

	$('.quantidade').html('Quantity:'+quantidade);
	$('.gpb').html('GBP:<b>'+despesa+'$</b>');


}
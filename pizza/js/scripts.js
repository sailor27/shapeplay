//business logic

function Pizza(name, size, toppings, price) {
  this.name;
  this.size;
  this.toppings = []
  this.price = 9;
}


Pizza.prototype.isLarge = function () {
  if (this.size === "large") {
    return this.price += 3
  }
}

/* This function works in the front end but not in the back end.
Pizza.prototype.addToppings = function () {
  this.toppings.forEach(function(topping){
    (this.price += 1);
  });
}*/


//user logic
$(document).ready(function(){
  var pizza1 = new Pizza();

  $("form#your-order").submit(function(event){
    event.preventDefault();
    pizza1.name = $("#name").val();

    $("input:checkbox[name=size]:checked").each(function(){
      pizza1.size = $(this).val();
    });
    pizza1.isLarge();

    $("input:checkbox[name=topping]:checked").each(function(){
      pizza1.toppings.push($(this).val());
    });

    pizza1.toppings.forEach(function(topping){
      (pizza1.price += 1);
      $('ul#toppings').append("<li>" + topping + "</li>");
    });

    $('#ticket').show();
    $('#your-name').prepend(pizza1.name);
    $('#order').prepend(pizza1.size + " pizza <br>")
    $('#price').append("$" + pizza1.price);

  });
});

// #hide and show
$(document).ready(function(){
    $("#hide").click(function(){
        $("#kk").hide();
    })
}); 
$(document).ready(function(){
    $("#show").click(function(){
        $("#kk").show();
    });
});

// #fade
$(document).ready(function(){
    $(".box").click(function(){
        $("#rr").fadeTo("slow",0.15);
    });
})
// #slide
$(document).ready(function(){
     $("#read").click(function(){
         $("#panel").slideToggle("slow");
     });
 });
// #animated
$(document).ready(function(){
    $(".move").click(function(){
    $(".h17").animate({left: '700px'});
    });
});
// #stop
$(document).ready(function(){
    $("#qq").click(function(){
        $("#tt").slideDown(5000);
    });
    $(".stop").click(function(){
        $("#tt").stop();
    });
});
// #callback
$(document).ready(function(){
    $("#ee").click(function(){
        $("#ww").hide(1000);
        alert("The paragraph is now hidden");
    });
});
$(document).ready(function(){
    $("#rr").click(function(){
        $("#ww").show();
        alert("The paragraph is now show");
    });
});
// #chaining
$(document).ready(function(){
    $(".cha").click(function(){
      $("#p1")
        .slideUp(2000)
        .slideDown(2000);
    });
  });
//   #get
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text" +
        $("#test").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " +
        $("#test").html());
    });
});
// #set Content
$(document).ready(function(){
    $("#lo1").click(function(){
      $("#jo1").text("HI THERE");
    });
    $("#lo2").click(function(){
      $("#jo2").html("<b>I AM UGYEN JAMTSHO</b>");
    });
    $("#lo3").click(function(){
      $("#test3").val("I AM FROM BHUTAN");
    });
  });
//   Add
$(document).ready(function(){
    $(".b1").click(function(){
      $(".img").before("<b>okay</b>");
    });
  
    $(".b2").click(function(){
      $(".img").after("<i>nothing</i>");
    });
  });
//   remove
$(document).ready(function(){
    $(".f1").click(function(){
      $(".f2").remove();
    });
  });
//   add css and css() and dimensions
$(document).ready(function(){
    $(".r17").click(function(){
      $("#div1").addClass("important pink");
      alert("Background color = " + $("#div2").css("background-color"));
    });
  });
  $(document).ready(function(){
    $(".r18").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div1").width() + "</br>";
      txt += "Height of div: " + $("#div1").height();
      $("#div1").html(txt);
    });
  });
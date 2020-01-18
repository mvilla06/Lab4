function addItem(){
    var form = $("#addForm");
    $(form).on("submit", (event)=>{
        event.preventDefault();
        var text = $("#addForm :input").val();
        if (!(text=="")){
            var item = document.createElement("li");
            var itemText =document.createElement("div");
            var itemButtons = document.createElement("div");
            var check = document.createElement("button");
            var del = document.createElement("button");
            $(check).html("Check"); $(check).addClass("check");
            $(del).html("Delete");$(del).addClass("del")
            $(itemButtons).append(check, del);
            $(itemText).addClass("texto");
            $(itemText).text(text);
            $(item).append(itemText, itemButtons);
            
            $("ul").append(item);
            $("#addForm :input").val("")
        }
        
    });
}


function click(){
    $("ul").on("click","button", function(event){
        var item = $(this).parent().parent();
        if($(this).attr("class")=="check"){
            
            if($(item).attr("class")=="checked"){
                $(item).removeClass("checked");
            }else{
                $(item).addClass("checked");
            }
            
        } else {
            $(item).remove();
        }
    });
}




function init(){
    addItem();
    click();
}

init();
headerHover();
download();
gameList();
searchPagination();
searchTemplate2();

// 顶部导航条效果
function headerHover (){
    $("#left1 a,#left3 a").hover(function (){//移入
        $(this)
        .css("color","#EFEA4B")
        .css("font-weight","bold")
    },function (){//移出
        $(this)
        .css("color","white")
        .css("font-weight","normal")
    })
}
// 下载客户端按钮移入效果
function download (){
    $("#downloadbtn").hover(function (){//移入
        $("#downloadbtn").css("background","yellow")
    },function (){//移出
        $("#downloadbtn").css("background","#edea4b")  
    })
}

// 游戏列表效果
function gameList (){
    $("#allgamelist-wrapper>div").hover(function (){
        $(this).css("background","rgb(42,42,42)")
        $(this).children("img")
        .css("width",267)
    },function (){
        $(this).css("background","rgb(29,29,29)")
        $(this).children("img")
        .css("width",257)
    })
}

// 跳转页码效果
function searchPagination (){
    $("#search-pagination li").hover(function (){
        $(this).css("color","#efea4b")
    },function (){
        $(this).css("color","#ffffff")
    })
}

// 类型模块效果
function searchTemplate2 (){
    $(".duljQI").hover(function (){
        $(this).css("background","#f1ed6217")
        $(this).children("svg").css("display","grid")
    },function (){
        $(this).css("background","#383838")
        $(this).children("svg").css("display","none")
    })
}
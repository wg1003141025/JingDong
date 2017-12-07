window.onload = function () {
    //banner侧导航选项卡
    /*1、初始化：none
     2、获取变量
     3、遍历标题
     4、onmouseover、onmouseout*/
    let banner_titlebei = document.getElementsByClassName("banner_left_kaui")[0];   //获取标题大块
    let banner_title = document.getElementsByClassName("banner_l");                 //获取标题
    //console.log(banner_title);
    let banner_conbei = document.getElementsByClassName("cate_pop")[0];                 //获取内容大块
    let banner_con = document.getElementsByClassName("cate_part");                           //获取内容
    //console.log(banner_con);
    banner_titlebei.onmouseover = function () {
        banner_conbei.style.display = "block";
    }
    banner_titlebei.onmouseout = function () {
        banner_conbei.style.display = "none";
    }
    for(let i = 0;i < banner_title.length;i++){
        banner_title[i].onmouseover = function () {
            for(let j = 0;j <banner_con.length;j++){
                banner_con[j].classList.remove("cate_part_active");
            }
            banner_con[i].classList.add("cate_part_active");
        }
    }

    //按需加载
    var agg = document.getElementsByClassName("ag");
    // console.log(agg);
    window.onscroll = function () {
        var bar = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset;
        for(var i = 0;i < agg.length;i++){
            var top = agg[i].offsetTop - 500;
            // console.log(top);
            var imgg = agg[i].getElementsByTagName("img");
            // console.log(imgg);
            if (bar > top){
                for(var j = 0;j <imgg.length;j++){
                    var dizhi = imgg[j].getAttribute("attr");
                    imgg[j].src = dizhi;
                    // console.log(imgg[j].src);
                }
            }
        }
    }
}

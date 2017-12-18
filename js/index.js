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
    //banner的轮播
    let banner_bkuai = document.getElementsByClassName("ban_cen_top")[0];
    let banner_tu = document.querySelectorAll(".bct_l");
    let banner_dian = document.querySelectorAll(".yuan");
    let now = 0;
    let banner_time = setInterval(banner_t,1000);
    let banner_left = document.getElementsByClassName("wang_left")[0];
    let banner_right = document.getElementsByClassName("wang_right")[0];
    function banner_t(can){
        can = can || "right";
        if(can == "right"){
            now++;
            if(now == banner_tu.length){
                now = 0;
            }
        }else if(can == "left"){
            now--;
            if(now < 0){
                now = banner_tu.length-1;
            }
        }

        banner_tu.forEach(function (value,index) {
            banner_dian[index].classList.remove("yuan_active");
            value.classList.remove("bct_l_active");
        });
        banner_dian[now].classList.add("yuan_active");
        banner_tu[now].classList.add("bct_l_active");
        //now++;
    }
    banner_bkuai.onmouseover = function () {
        clearInterval(banner_time);
    }
    banner_bkuai.onmouseout = function () {
        banner_time = setInterval(banner_t,1000);
    }
    banner_dian.forEach(function (value1,index1) {
        value1.onclick = function () {
            banner_tu.forEach(function (value2,index2) {
                value2.classList.remove("bct_l_active");
                banner_dian[index2].classList.remove("yuan_active");
            })
            banner_tu[index1].classList.add("bct_l_active");
            this.classList.add("yuan_active");
            now = index1;
        }
    })
    banner_left.onclick = function () {
        banner_t("left");
    }
    banner_right.onclick = function () {
        banner_t("right");
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

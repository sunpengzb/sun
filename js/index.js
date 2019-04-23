$(function () {
    //引入头部  底部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    //轮播部分
    var n = 0;
    //节流阀
    flag = true;
    var m = 0
    $('.screen .border-M>li').on('click', function () {
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.screen>ul>li').fadeOut().eq(index).fadeIn();
        n = index;
    })
    //点击部分 
    $('.screen .right').on('click', function () {
        if (flag) {
            flag = false;
            if (n >= 2) {
                n = 0;
            } else {
                n++;
            }

            $('.screen .border-M>li').removeClass('active').eq(n).addClass('active');
            $('.screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })
    $('.screen .left').on('click', function () {
        if (flag) {
            flag = false
            if (n <= 0) {
                n = 2;
            } else {
                n--;
            }
            $('.screen .border-M>li').removeClass('active').eq(n).addClass('active');
            $('.screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })
})
/**
 * Created by jick on 2016/10/6.
 */
$(function(){
    //柱子的随机距离生成
    var name=0;
    var tops=$(".container").offset().top;
    function createcolumn() {
        var column = ('<div class="well"></div><div class="well"></div><div class="well"></div><div class="well"></div>');
        $(".well-box").append(column);
        for (var i = 1; i < 4; i++) {
            var numBer = parseInt(Math.random() * (tops - 160) + 160);
            name = name + numBer;
            $(".well").eq(i).css("left", name + "px")
        }
    }
    createcolumn();
    //设置成功文本数组
    var success = [
        '勇敢坚毅真正之才智乃刚毅之志向。 —— 拿破仑',
        '志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长。 —— 莎士比亚',
        '骏马是跑出来的，强兵是打出来的。',
        '只有登上山顶，才能看到那边的风光。',
        '如果惧怕前面跌宕的山岩，生命就永远只能是死水一潭。',
        '平时没有跑发卫千米，占时就难以进行一百米的冲刺。',
        '梯子的梯阶从来不是用来搁脚的，它只是让人们的脚放上一段时间，以便让别一只脚能够再往上登。',
        '没有激流就称不上勇进，没有山峰则谈不上攀登。',
        '真正的才智是刚毅的志向。 —— 拿破仑',
        '山路曲折盘旋，但毕竟朝着顶峰延伸。',
        '只有创造，才是真正的享受，只有拚搏，才是充实的生活。',
        '敢于向黑暗宣战的人，心里必须充满光明。',
        '种子牢记着雨滴献身的叮嘱，增强了冒尖的勇气。',
        '自然界没有风风雨雨，大地就不会春华秋实。',
        '只会幻想而不行动的人，永远也体会不到收获果实时的喜悦。',
        '勤奋是你生命的密码，能译出你一部壮丽的史诗。',
        '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
        '奋斗者在汗水汇集的江河里，将事业之舟驶到了理想的彼岸。',
        '忙于采集的蜜蜂，无暇在人前高谈阔论。',
        '勇士搏出惊涛骇流而不沉沦，懦夫在风平浪静也会溺水。'
    ];
    //设置失败文本数组
    var fail = [
        '志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中。',
        '海浪为劈风斩浪的航船饯行，为随波逐流的轻舟送葬。',
        '人生最重要的一点是，永远不要迷失自己。',
        '一个人承受孤独的能力有多大，他的能力就有多大。',
        '实力塑造性格，性格决定命运。',
        '普通人成功并非靠天赋，而是靠把寻常的天资发挥到不寻常的高度。',
        '对于强者，要关注他们的灵魂，对于弱者，他关注他们的生存。',
        '积极的人在每一次忧患中都看到一个机会，而消极的人则在每个机会都看到某种忧患。',
        '成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。',
        '当你感到悲哀痛苦时，最好是去学些什么东西。学习会使你永远立于不败之地。',
        '有的人一生默默无闻，有的人一生轰轰烈烈，甚至千古流芳，为什么会这样？因为默默无闻的人只是满足于现状，而不去想怎么轰轰烈烈过一生，不要求自己，去做，去行动，怎么能够成功？',
        '人性最可怜的就是：我们总是梦想着天边的一座奇妙的玫瑰园，而不去欣赏今天就开在我们窗口的玫瑰。',
        '在人生的道路上，即使一切都失去了，只要一息尚存，你就没有丝毫理由绝望。因为失去的一切，又可能在新的层次上复得。',
        '没有一劳永逸的开始；也没有无法拯救的结束。人生中，你需要把握的是：该开始的，要义无反顾地开始；该结束的，就干净利落地结束。',
        '生命的奖赏远在旅途终点，而非起点附近。我不知道要走多少步才能达到目标，踏上第一千步的时候，仍然可能遭到失败。但我不会因此放弃，我会坚持不懈，直至成功！',
        '不要认为只要付出就一定会有回报，这是错误的。学会有效地工作，这是经营自己强项的重要课程。',
        '苦心人天不负，卧薪尝胆，三千越甲可吞吴。有志者事竞成，破釜沉舟，百二秦川终属楚。',
        '生命本身是一个过程，成功与失败只是人生过程中一些小小的片段，若果把生命与成功或失败联系在一起，生命将失去本身该有的意义。',
        '我们不要哀叹生活的不幸，诅咒命运的不公。在命运面前，我们要做强者，掐住命运的咽喉，叩问命运，改变命运。',
        '努力和效果之间，永远有这样一段距离。成功和失败的唯一区别是，你能不能坚持挺过这段无法估计的距离。'
    ];



    var buttonDisable=false;
    //鼠标点击事件
    $(".btnClick").on({
       "mousedown":function(){
           if(!buttonDisable){
               // var tops=$(".container").offset().top; //获取棍子到顶部的距离
               $(this).addClass("btnDown");    //添加按钮的样式
               //alert(123);
               $(".stick").animate({"width": tops + "px"}, 1500); //判定棍子动态执行
           }
        },"mouseup":function(){
             if(!buttonDisable){
                 $(this).removeClass("btnDown"); //去掉按钮的样式
                 $(".stick").stop().addClass("stickDown");   //棍子停止变长,添加棍子倒下的样式
                 buttonDisable=true;
                     setTimeout(time, 700);    //调用人物的动态，并设定延迟动态
             }

        }
    });



    var num=0;
    function time(){
        $(".man img").attr("src","img/stick.gif"); //变换成人物动态图
        var manLeft=$(".man").offset().left;   //获取人物左距离
        var manWidth=$(".man").width();     //获取人物自身宽度
        var columnLeft=$(".well-box").offset().left; //获取柱子整体左偏移
        var stickWidth=$(".stick").width();  //获取棍子自身宽度
        var column1=$(".well").eq(num).offset().left; //获取第一个柱子的左偏移
        var column2=$(".well").eq(num+1).offset().left;  //获取第二个柱子的左偏移
        var move=manWidth+stickWidth+manLeft;  // 计算小人移动的距离
        var moves=column2-column1-100;  //两个柱子之间的距离
        $(".man").animate({"left":move-columnLeft+"px"},1000,function(){
            //小人失败的判断
            if((moves>stickWidth) || (moves+100<=stickWidth)) {
                $(".man").children("img").addClass("rotate");
                setTimeout(function(){
                    var numb=parseInt(Math.random()*19);
                    $(".dialog").remove();     //去掉弹框
                    //添加节点
                    var str='<p>'+fail[numb]+'</p>';
                    str+='<p class="dialog-btn"> ';
                    str+='<a href="javascript:void (0);" class="play-agin">重玩一次</a>';
                    str+='</p>';
                    $("body").append($('<div class="dialog"></div>').html(str));
                    buttonDisable=true;
                },800);
            }
            //小人成功的判断
            else{
                $(".man img").attr("src","img/stick_stand.png");               //换成小人静态图
                $(".man").css({"left":column2-manWidth-columnLeft+100+"px"});          //小人左移像素
                $(".stick").css("left",column2-columnLeft+100+"px");                  //棍子左移动像素
                $(".stick").removeClass("stickDown");                            //去掉棍子倒下样式
                $(".stick").width(0);                                             //棍子宽度为0
                var so=$(".well").eq(num+1).css("left");                  //获取第一个柱子的左像素
                $(".container").animate({"left":"-"+so},1000,function(){});//柱子左移动动态
                buttonDisable=false;
                num++ ;
                //成功闯关后弹框
                if(num==3){
                    setTimeout(function(){
                        var numb=parseInt(Math.random()*19);
                        $(".dialog").remove();
                        var str='<p>'+success[numb]+'</p>';
                        str+='<p class="dialog-btn"> ';
                        str+='<a href="javascript:void (0);" class="play-agin">重玩一次</a>';
                        str+='<a href="javascript:void (0);" class="nextone">下一关</a>';
                        str+='</p>';
                        $("body").append($('<div class="dialog"></div>').html(str));
                        buttonDisable=true;
                    },900)
                }
            }
        })
    }
    //关卡变量
    var nums=1;
    $(".play-title").html("关卡"+nums);
    //进入下一关的按钮
    $(".nextone").live("click",function(){
        nums++;
        var numb=parseInt(Math.random()*32+1);
        $(".dialog").remove();
        $("body").removeClass();
        $("body").addClass("bg"+numb);
        $(".play-title").html("关卡"+nums);
        $(".man").css("left","50px");
        $(".stick").css("left","100px");
        $(".container").css("left","0px");
        name=0;
        num=0;
        createcolumn();
        buttonDisable=false;
    });

    //重玩按钮
    $(".play-agin").live("click",function(){
        var numb=parseInt(Math.random()*19+1);
        $(".dialog").remove();
        num=0;
        $(".man img").attr("src","img/stick_stand.png");
        $(".man img").removeClass("rotate");
        $(".stick").removeClass("stickDown");
        $(".stick").width(0);
        $(".man").css("left","50px");
        $(".stick").css("left","100px");
        $(".container").css("left","0px");
        buttonDisable=false;
    });
});
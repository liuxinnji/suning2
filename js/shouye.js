//顶图添加
let dingtutianjiadianji = document.querySelector(".daohang .tianjia")
let dingtu = document.querySelector(".ding")
let dingtushanchudianji = document.querySelector(".ding .shanchu")
dingtushanchudianji.onclick = function() {
	dingtu.style.display = "none";
	dingtutianjiadianji.style.display = "block";
	dingtushanchudianji.style.display = "none";
}
dingtutianjiadianji.onclick = function() {
	dingtu.style.display = "block";
	dingtutianjiadianji.style.display = "none";
	dingtushanchudianji.style.display = "block";
}
//导航栏
// let

//搜索框
let souSuoinput = document.querySelector(".search .box .right .frame input")
let souSuoxiala = document.querySelector(".search .box .right .xiala")
souSuoinput.onfocus = function() {
	souSuoxiala.style.display = "flex"
}
souSuoinput.onblur = function() {
	souSuoxiala.style.display = "none"
}
//轮播图
let carBoxletfulli = document.querySelectorAll(".car .box .left ul li")
let carBoxletfullitent = document.querySelectorAll(".car .box .left ul li .tent")
carBoxletfulli.forEach(function(val,index){
	val.onmouseover = function(){
		carBoxletfulli.forEach(function(ele,key){
			ele.classList.remove("active");
			carBoxletfullitent[key].classList.remove("active")
			carBoxletfullitent[key].style.transition = "all 1s"
		})
		carBoxletfulli[index].classList.add("active")
		carBoxletfullitent[index].classList.add("active")
		carBoxletfullitent[index].style.transition = ""
	}
	val.onmouseout = function(){
		carBoxletfulli[index].classList.remove("active")
		carBoxletfullitent[index].classList.remove("active")
		carBoxletfullitent[index].style.transition = "all 1s"
	}
})

let carBoxtu =document.querySelectorAll(".car .box .tu img")
let carBoxdian = document.querySelectorAll(".car .box .tu .dian ul li")
let carBoxjiantouleft = document.querySelector(".car .box .tu .jiantou .left")
let carBoxjiantouright = document.querySelector(".car .box .tu .jiantou .right")
let carBox = document.querySelector(".car .box")
var n = 0;
carBoxjiantouleft.onclick = function(){
	n--;
	Move()
}
carBoxjiantouright.onclick = function(){
	n++;
	Move()
}
carBox.onmouseover = function(){
	clearInterval(time);
}
carBox.onmouseout = function(){
	time = setInterval(function(){
		n++;
		Move();
	},2000)
}
let time = setInterval(function(){
	n++;
	Move();
},2000)
function Move(){
	if(n>7){
		n = 0
	}
	if(n<0){
		n = 7
	}
	carBoxdian.forEach(function(val,index){
		val.classList.remove("active");
		carBoxtu[index].style.opacity = "0";
	})
	carBoxdian[n].classList.add("active");
	carBoxtu[n].style.opacity = "1"
}
let userul = document.querySelector(".user-middle ul.user-flag1");
let userMiddle = document.querySelector(".user-middle");
let userN = 0;

userMiddle.onmouseover = function() {
	clearInterval(usertime)
}
userMiddle.onmouseout = function() {
	usertime = setInterval(function() {
		userN++;
		usermove();
	}, 3000)
}
let usertime = setInterval(function() {
	userN++;
	usermove();
}, 3000)

function usermove() {
	userul.classList.add("active")
	userul.style.marginTop = -userN * 145 + "px";
	if (userN > 1) {
		setTimeout(function() {
			userul.style.marginTop = "0px";
			userul.classList.remove("active");
			userN = 0;
		}, 1000)
	}
}

//限时抢购
let qgtop = document.querySelectorAll(".qg-con .qg-top .qg-top-middle>span");
let qgbottom = document.querySelectorAll(".qg-con .qg-bottom .qg-bottom-left ul");
qgtop.forEach(function(val, index) {
	val.onmouseover = function() {
		qgtop.forEach(function(ele, key) {
			ele.classList.remove("active");
			qgbottom[key].classList.remove("active");
		})
		val.classList.add("active");
		qgbottom[index].classList.add("active");
	}
})


let qgleftbtn = document.querySelector(".qg-con .qg-bottom .qg-bottom-left .huadong .qg-leftbtn");
let qgrightbtn = document.querySelector(".qg-con .qg-bottom .qg-bottom-left .huadong .qg-rightbtn");
let qgul = document.querySelector(".qg-con .qg-bottom .qg-bottom-left .huadong ul");
let qgli = document.querySelectorAll(".qg-con .qg-bottom .qg-bottom-left .huadong ul li");
let qgSize = qgli.length - 5;
let qgN = 0;

qgleftbtn.onclick = function() {
	qgN -= 5;
	qgMove();
}
qgrightbtn.onclick = function() {
	qgN += 5;
	qgMove();
}

function qgMove() {
	if (qgN > qgSize) {
		qgN = qgSize;
	}
	if (qgN < 0) {
		qgN = 0;
	}
	qgul.style.left = -qgN * 200 + "px";
}

//必抢清单left
let bqul = document.querySelector(".bq-con .bq-left .bq-left-bottom ul");
let bqleftbtn = document.querySelector(".bq-con .bq-left .bq-left-bottom .bq-leftbtn");
let bqrightbtn = document.querySelector(".bq-con .bq-left .bq-left-bottom .bq-rightbtn");
let bqdian = document.querySelectorAll(".bq-con .bq-left .bq-left-bottom .bq-dian>div");
let bqbigbox = document.querySelector(".bq-con .bq-left .bq-left-bottom");
let bqN = 1;

bqbigbox.onmouseover = function() {
	clearInterval(bqtime)
}
bqbigbox.onmouseout = function() {
	bqtime = setInterval(function() {
		bqN++;
		bqMove();
	}, 3000)
}
let bqtime = setInterval(function() {
	bqN++;
	bqMove();
}, 3000)
bqdian.forEach(function(val, index) {
	val.onmouseover = function() {
		bqN = index + 1;
		bqMove();
	}
})
bqrightbtn.onclick = function() {
	bqN++;
	bqMove();
}
bqleftbtn.onclick = function() {
	bqN--;
	bqMove();
}

function bqMove() {
	bqul.classList.add("active")
	bqul.style.left = -bqN * 390 + "px";
	if (bqN > 3) {
		setTimeout(function() {
			bqul.classList.remove("active")
			bqul.style.left = "-390px";
		}, 600)
		bqN = 1;
	}
	if (bqN == 0) {
		setTimeout(function() {
			bqul.classList.remove("active")
			bqul.style.left = "-1170px";
		}, 600)
		bqN = 3;
	}
	bqdian.forEach(function(val) {
		val.classList.remove("active");
	})
	bqdian[bqN - 1].classList.add("active");
}

//必抢清单right
let bqRighttop = document.querySelectorAll(".bq-con .bq-right .bq-left-bottom .bq-list .big-list span");
let bqRightbottom = document.querySelectorAll(".bq-con .bq-right .bq-left-bottom .bq-list1>ul");
let bqRightbigList = document.querySelector(".bq-con .bq-right .bq-left-bottom .bq-list .big-list")

bqRighttop.forEach(function(val, index) {
	val.onclick = function() {
		bqRighttop.forEach(function(ele, key) {
			ele.classList.remove("active");
			bqRightbottom[key].classList.remove("active");
		})
		if (index > 2) {
			bqRightbigList.style.left = "-130px";
		} else {
			bqRightbigList.style.left = "0px";
		}
		val.classList.add("active");
		bqRightbottom[index].classList.add("active");
	}
})

//中间图片
let pictureRight = document.querySelectorAll(".picture-con>ul>li:nth-child(3) .picture-right .zhezhao");
let pictureLeft = document.querySelectorAll(".picture-con>ul>li:nth-child(3) .picture-left>a>img");
let pictureLefttext = document.querySelectorAll(".picture-con>ul>li:nth-child(3) .picture-left>a>p");
let pictureLefticon = document.querySelectorAll(".picture-con>ul>li:nth-child(3) .picture-left>a>span");

pictureRight.forEach(function(val, index) {
	val.onmouseover = function() {
		pictureRight.forEach(function(ele, key) {
			pictureLeft[key].classList.remove("active");
			pictureLefttext[key].classList.remove("active");
			pictureLefticon[key].classList.remove("active");
		})
		pictureLeft[index].classList.add("active");
		pictureLefttext[index].classList.add("active");
		pictureLefticon[index].classList.add("active");
	}
})

// 楼层跳转
let lcLeft = document.querySelectorAll(".lc-con .lc-list>ul>li");
let lcRight = document.querySelectorAll(".lc-con .lc-list-con");
let root = document.documentElement;
let lcN = 0;
let lcflag = true;

lcLeft.forEach(function(val, index) {
	val.onclick = function() {
		lcflag = false;
		lcLeft.forEach(function(ele) {
			ele.classList.remove("active");
		})
		val.classList.add("active");
		if (root.scrollTop < lcRight[index].offsetTop) {
			lcN = 50;
		}
		if (root.scrollTop > lcRight[index].offsetTop) {
			lcN = -50;
		}
		let lcTime = setInterval(function() {
			if ((root.scrollTop + 50 > lcRight[index].offsetTop) && lcN > 0) {
				root.scrollTop = lcRight[index].offsetTop - 70;
				clearInterval(lcTime);
				lcflag = true;
			} else if ((root.scrollTop - 50 < lcRight[index].offsetTop) && lcN < 0) {
				root.scrollTop = lcRight[index].offsetTop - 70;
				clearInterval(lcTime);
				lcflag = true;
			} else {
				root.scrollTop += lcN;
			}
		}, 10)

	}
})
let lcLeftbox = document.querySelector(".lc-con .lc-list");
let lc = document.querySelector(".lc");
let guding = document.querySelector(".guding");
window.onscroll = function() {
	if ((root.scrollTop >= lc.offsetTop - window.innerHeight + 20) && (root.scrollTop < lc.offsetTop + lc.offsetHeight -
			300)) {
		lcLeftbox.style.display = "block";
	} else {
		lcLeftbox.style.display = "none";
	}
	if (root.scrollTop >= 900) {
		guding.style.display = "block";
	} else {
		guding.style.display = "none";
	}
	if (lcflag) {
		lcRight.forEach(function(ele, key) {
			if ((root.scrollTop > ele.offsetTop - window.innerHeight + 20) && (root.scrollTop <= ele.offsetTop - 30)) {
				lcLeft[key].classList.add("active");
			} else {
				lcLeft[key].classList.remove("active");
			}
			if (root.scrollTop > lcRight[8].offsetTop - window.innerHeight + 20) {
				console.log(lcLeft[8])
				lcLeft[8].classList.add("active");
			}
		})
	}
}

let lcbacktop = document.querySelector(".lc-con .lc-list>ul>div");
lcbacktop.onclick = function() {
	lcflag = false;
	let topTime = setInterval(function() {
		root.scrollTop -= 200;
		if (root.scrollTop - 200 <= 0) {
			root.scrollTop = 0;
			clearInterval(topTime);
			lcflag = true;
		}
	}, 1)
}


//固定顶部
let gudingleftli = document.querySelectorAll(".guding .gudingLeft>ul>li");
let gudingleftul = document.querySelector(".guding ul")
let gudingyoula = document.querySelectorAll(".guding .youla");
let gudingleft = document.querySelector(".guding .gudingleft");
let gudingLeft = document.querySelector(".guding .gudingLeft");



gudingleft.onmouseover = function() {
	gudingLeft.style.display = "block";
}
gudingleft.onmouseout = function() {
	gudingLeft.style.display = "none";
}
gudingLeft.onmouseover = function() {
	gudingLeft.style.display = "block";
}
gudingLeft.onmouseleave = function() {
	setTimeout(function() {
		gudingLeft.style.display = "none";
	}, 500)
}
gudingleftli.forEach(function(val, index) {
	val.onmouseover = function() {
		gudingyoula.forEach(function(ele) {
			ele.classList.remove("active1");
			ele.classList.remove("active");
		})
		gudingyoula[index].classList.add("active");
		gudingyoula[index].style.width = "1000px";
		gudingyoula[index].style.border = "1px solid #000";
		gudingyoula[index].style.borderLeft = "none";
	}
})
gudingleftul.onmouseout = function() {
	gudingyoula.forEach(function(ele, index) {
		ele.classList.add("active1");
		ele.style.width = "0px";
	})
}
gudingyoula.forEach(function(val, index) {
	val.onmouseover = function() {
		val.style.width = "1000px";
	}
})
gudingyoula.forEach(function(val, index) {
	val.onmouseout = function() {
		val.classList.add("active1");
		val.style.width = "0px";
	}
})


let gudinginput = document.querySelector(".guding input");
let gudingp = document.querySelector(".guding .sousuo p");
let gudingxiala = document.querySelector(".guding .sousuo .xiala");
let gudingbtn = document.querySelector(".guding .sousuo .xiala .btn");

gudingp.onclick = function() {
	gudingp.style.display = "none";
	gudinginput.focus();
}
gudinginput.onclick = function() {
	gudingp.style.display = "none";
}
gudinginput.onfocus = function() {
	gudingxiala.style.display = "block";
}
gudinginput.onblur = function() {
	gudingxiala.style.display = "none";
	gudingp.style.display = "block";
}
gudingbtn.onclick = function() {
	gudingxiala.style.display = "none";
	gudingp.style.display = "block";
}



let gudingtop = document.querySelector(".guding .flaga");
let gudingbottom = document.querySelector(".guding .flag");
let gudingtopi = document.querySelector(".guding .flaga i");
let gudingya = document.querySelector(".guding .ya");

gudingtop.onmouseover = function() {
	gudingtopi.style.transform = "rotate(-180deg)";
	gudingbottom.style.height = "302px";
	gudingtop.classList.add("active");
	gudingbottom.classList.add("active");
	gudingya.style.display = "block";
}
gudingtop.onmouseout = function() {
	gudingtopi.style.transform = "rotate(0deg)";
	gudingbottom.style.height = "0";
	gudingtop.classList.remove("active");
	gudingbottom.classList.remove("active");
	gudingya.style.display = "none";
}

//固定右
let gdya = document.querySelectorAll(".gdy .gdy-bottom .flag>a");
let gdyp = document.querySelectorAll(".gdy .gdy-bottom .flag>p");
let gdyarr = ["47px","47px","47px","47px","73px","0px","73px"];
let gdyNewbackground = ["-26px -23px","-26px -47px","-26px -70px","-26px -93px","-26px -139px","-26px -164px","-26px -258px"]
let gdyOldbackground = ["0 -23px","0 -47px","0 -70px","0 -93px","0 -139px","0 -164px","0 -258px"]
let gdyFlag = true;

gdya.forEach(function(val,index){
	val.onmouseover = function(){
		gdya[index].style.backgroundPosition = gdyNewbackground[index];
		val.style.backgroundColor = "#f90";
		gdyp[index].style.width = gdyarr[index];
		gdyp[index].style.background = "#f90";
		gdyp[index].style.color = "#383838";
	}
	val.onmouseout = function(){
		val.style.backgroundColor = "#383838";
		gdya[index].style.backgroundPosition = gdyOldbackground[index];
		gdyp[index].style.width = "0px";
		gdyp[index].style.background = "#383838";
		gdyp[index].style.color = "#f90";
	}
})


let banneradleft = document.querySelectorAll(".banner-con .ad .ad-list2>ul>span.adleft");
let banneradright = document.querySelectorAll(".banner-con .ad .ad-list2>ul>span.adright");
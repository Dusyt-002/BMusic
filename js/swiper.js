var current = 0
var items = document.querySelectorAll('.swiper .content img')
var next = document.querySelector('.controller .next')
var prev = document.querySelector('.controller .prev')
var swiper = document.querySelector('.swiper')

// 创建小点点 图片有几个 
items.forEach(function (element, index) {
    var node = document.createElement('i')
    node.index = index
    document.querySelector('.dot').appendChild(node)
})

var dots = document.querySelectorAll('.dot i')

// 根据index 显示对应图片
function showPic(index) {
    // 把所有 item 都隐藏
    items.forEach(function (element) {
        element.style.opacity = '0'
    })
    // 把当前 item 显示
    items[index].style.opacity = '1'
}
// 根据index 高亮对应dot
function showDot(index) {
    // 重置所有小点点
    dots.forEach(function (element) {
        element.style.background = '#949BA1'
    })
    // 把当前图片对应的小点点高亮
    dots[index].style.background = '#949BA1'
}

function nextPic() {
    current++
    current = (current > items.length - 1) ? 0 : current
    showPic(current)
    showDot(current)
}

function prevPic() {
    current--
    current = (current < 0) ? items.length - 1 : current
    showPic(current)
    showDot(current)
}

// next.onclick = function () {
//     nextPic()
// }
// 上下按钮
next.onclick = nextPic
prev.onclick = prevPic

// 小点点按钮
dots.forEach(function (element, index) {
    element.onclick = function () {
        // console.log(this.index)
        current = this.index
        showDot(current)
        showPic(current)
    }
})

// 定时器
var timer = setInterval(nextPic, 3000);

// 鼠标在swpier上面的时候 停止定时器
swiper.onmouseover = function () {
    clearInterval(timer)
}
swiper.onmouseout = function () {
    timer = setInterval(nextPic, 3000);
}
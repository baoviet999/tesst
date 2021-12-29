const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuSideBar = $('.star-menu')
const sideBar = $('.side-bar__menu')
const sideBarModal = $('.side-bar__modal')
const sideBarBtn = $('.side-bar--active > .star-menu')
const modalNav = $('.side-bar__modal')
const commentInput = $('.comment-input')
const submitCm = $('.submit-comment')
const navVideo = $('.video-section__list')
const videoTitle = $('.video-section__content-name')

window.top.document.title = videoTitle.innerText.toString()

menuSideBar.onclick=()=>{
    sideBar.classList.toggle('active')
    sideBarModal.classList.toggle('active')
}
sideBarModal.onclick=()=>{
    sideBarModal.classList.toggle('active')
    sideBar.classList.toggle('active')
}
sideBarBtn.onclick=()=>{
    sideBarModal.classList.toggle('active')
    sideBar.classList.toggle('active')
}
modalNav.addEventListener('scroll',(e)=>{
    console.log(e.target)
})

commentInput.onfocus=()=>{
    commentInput.classList.add('active')
}
commentInput.onblur=()=>{
    commentInput.classList.remove('active')
}
commentInput.oninput=(e)=>{
    e.target.value !== '' ? submitCm.style = 'color : #fff; background-color :  #065FD4' : submitCm.style = 'color : var(--text-color)'
}
const App ={
    videos:[
        {
            videoLink : './video-01.html',
            videoImg : '../assest/img/img1.webp',
            duration : '04:37',
            avatar : '../assest/img/avataChanel1.jpg',
            videoName : 'Tình Yêu Màu Hồng (Lofi Ver.) - Hồ Văn Quý x Xám x Freak D',
            chanelName :'Freak D Music',
            videoView : '25.811.258 lượt xem',
            videoDate : '10 tháng trước'
        },
        {
            videoLink : './Video-list/video-02.html',
            videoImg : '../assest/img/img2.webp',
            duration : '44:56',
            avatar : '.../img/avataChanel2jpg.jpg',
            videoName : '3107-2 - Sau Này Liệu Chúng Ta - Sợ Lắm 2 ft. Hẹn Yêu - Mix Freak D Mashup Lofi Sad Cực Chill - P2',
            chanelName :'Pii Music',
            videoView : '22.755.759 lượt xem',
            videoDate : '4 tháng trước'
        },
        {
            videoLink : './Video-list/video-01.html',
            videoImg : '../assest/img/img3.webp',
            duration : '56:02',
            avatar : '../img/avataChanel3.jpg',
            videoName : 'Những Bài Hát Lofi Acoustic Tiếng Anh Cực Chill Hay Nhất | Nhạc Lofi Chill Tik Tok Nhẹ Nhàng 🎵',
            chanelName :'#Musikrimix',
            videoView : '5.288.685 lượt xem',
            videoDate : '2 tháng trước'
        },
        {
            videoLink : './Video-list/video-01.html',
            videoImg : '../assest/img/img4.webp',
            duration : '01:56:52',
            avatar : '../img/avataChanel4.jpg',
            videoName : 'HỌC CÙNG MÌNH📚2-HOUR STUDY WITH ME🌦️ / calm piano / A Rainy Day in Shibuya, Tokyo',
            chanelName :'Abao ở Tokyo',
            videoView : '3.210.088 lượt xem',
            videoDate : 'Đã công chiếu vào 30 thg 9, 2021'
        },
        {
            videoLink : './Video-list/video-01.html',
            videoImg : '../assest/img/img5.webp',
            duration : '06:49',
            avatar : '../img/avataChanel5.jpg',
            videoName : 'Lyrics || YÊU 5 - Rhymastic',
            chanelName :'Jen Hoang',
            videoView : '99.128.773 lượt xem',
            videoDate : '23 thg 1, 2017'
        },
        {
            videoLink : './Video-list/video-01.html',
            videoImg : '../assest/img/img6.webp',
            duration : '03:53:57',
            avatar : '../img/avataChanel6.jpg',
            videoName : '[3 Giờ] Nhạc Baroque Tập Trung Học Tập Làm Việc',
            chanelName :'Quin Mee',
            videoView : '1.079.786 lượt xem',
            videoDate : '9 thg 6, 2020'
        },
    ],
    renderListVideo(){
        var html = this.videos.map((video, index)=>{
            return `
            <a href='${video.videoLink}' class="video-section__item">
                            <div class="video-section__item-img">
                                <img src='${video.videoImg}' alt="">
                            </div>
                            <div class="video-section__item-content">
                                <p class='video-section__item-content-name'>
                                    ${video.videoName}
                                </p>
                                <span class='video-section__item-content-author'>${video.chanelName}<span><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 14px; height: 14px;"><g class="style-scope yt-icon"><path d="M12,4v9.38C11.27,12.54,10.2,12,9,12c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4V8h6V4H12z" class="style-scope yt-icon"></path></g></svg></span></p></span>
                                <p class='video-section__item-content-view'> 
                                    <span>${video.videoView}</span> 
                                    <span>${video.videoDate}</span>
                                </p>
                            </div>
                        </a>
            `;
        });
        navVideo.innerHTML = html.join('')
    },


    render(){
        this.renderListVideo()
    },
    start(){
        this.render()
    }
}
App.start()
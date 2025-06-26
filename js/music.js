const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放
    audio: [
	{
        name: "再见",
        artist: '邓紫棋',
        url: 'https://i.y.qq.com/n2/m/outchain/player/index.html?songid=104883226&songtype=0',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003c616O2Zlswm_2.jpg?max_age=2592000',	
    }
	]
});
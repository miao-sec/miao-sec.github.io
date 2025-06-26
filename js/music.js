const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放
	listFolded: true, //列表默认折叠
	//lrcType: 3, //歌词传递方式
	mutex: true,
    audio: [
	{
		name: "我记得",
		artist: '赵雷',
		url: 'http://music.163.com/song/media/outer/url?id=1974443814.mp3',
		cover: 'http://p2.music.126.net/9bVOooAY6U6EJLzpv1Fikw==/109951169682871673.jpg?param=130y130',
	},
	{
		name: "程艾影",
		artist: '赵雷',
		url: 'http://music.163.com/song/media/outer/url?id=1974443815.mp3',
		cover: 'http://p2.music.126.net/9bVOooAY6U6EJLzpv1Fikw==/109951169682871673.jpg?param=130y130',
	},
	{
		name: "泸沽湖",
		artist: '麻园诗人',
		url: 'http://music.163.com/song/media/outer/url?id=469073823.mp3',
		cover: 'http://p2.music.126.net/GNTlMO9MtTNOyXyBWvB2Hw==/109951170199174004.jpg?param=130y130',
	},
	{
		name: "现在现在",
		artist: '麻园诗人',
		url: 'http://music.163.com/song/media/outer/url?id=2684572363.mp3',
		cover: 'http://p1.music.126.net/BNIUBLiShcdIfac4T5gZsw==/109951170610973832.jpg?param=130y130',
	},
	{
		name: "传奇",
		artist: '郭沁',
		url: 'https://er-sycdn.kuwo.cn/bd01fca6ff98b679b822dafbb9ba3dba/685d58a0/resource/30106/trackmedia/M500001setFb0QFRq0.mp3',
		cover: 'http://p2.music.126.net/Q0CrzKtu4PZFKvuA0kZH4A==/109951163039589693.jpg?param=130y130',
	},
	{
		name: "小宇",
		artist: '张震岳',
		url: 'https://lw-sycdn.kuwo.cn/9b8a039ac67bf2d03e91c1f15bf355f4/685d5ba1/resource/30106/trackmedia/M500001ptvUV3LyVOC.mp3',
		cover: 'http://img1.kuwo.cn/star/albumcover/500/21/67/2978652206.jpg?param=130y130',
	},
	{
		name: "平凡之路",
		artist: '朴树',
		url: 'https://er-sycdn.kuwo.cn/7c8f0e74f92b4c88d5cbe99bc9106fac/685d6508/resource/30106/trackmedia/M5000033ZrqK3ulGrw.mp3',
		cover: 'http://img4.kuwo.cn/star/albumcover/500/75/9/3640622973.jpg?param=130y130',
	},
	{
		name: "No Fear In My Heart",
		artist: '朴树',
		url: 'hhttps://er-sycdn.kuwo.cn/b8d00212dab2f83f342ff875f4a80330/685d7243/resource/30106/trackmedia/M500003RsfNS41XYHj.mp3',
		cover: 'http://img4.kuwo.cn/star/albumcover/500/68/69/2985138734.jpg?param=130y130',
	},
	]
});
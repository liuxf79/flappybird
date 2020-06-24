import {
	ResourceLoader
} from "./js/base/ResourceLoader";
import {
	Director
} from "./js/Director";
import {
	BackGround
} from "./js/runtime/BackGround";
import {
	DataStore
} from "./js/base/DataStore";
import {
	Land
} from "./js/runtime/Land";
import {
	Birds
} from "./js/player/Birds";
import { Score } from "./js/player/Score";

//初始化整个游戏的Spite作为游戏的入口
export class Main {


	constructor() {
		this.canvas = wx.createCanvas();
		this.ctx = this.canvas.getContext('2d');
		this.dataStore = DataStore.getInstance();
		this.director = Director.getInstance();
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceFirstLoaded(map))
		let image = new wx.createImage();
		image.src = './res/background.png';
		image.onload = () => {

			this.ctx.drawImage(
				image,
				0,
				0,
				image.width,
				image.height,
				0,
				0,
				image.width,
				image.height
			)
		}

	}
	//创建背景音乐
	createBackgroundMusic(){
		const bgm = wx.createInnerAudioContext();
		bgm.autoplay = true;
		bgm.loop = true;
		bgm.src = 'audios/bgm.mp3'
	}

	onResourceFirstLoaded(map) {
		this.dataStore.canvas = this.canvas
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
		this.createBackgroundMusic();
		this.init()

	}

	init() {
		//首先结束游戏没有结束
		this.director.isGameOver = false;
		this.dataStore
			.put('background', BackGround)
			.put('pencils', [])
			.put('land', Land)
			.put('birds', Birds)
			.put('score',Score);
		this.registerEvent();
		//要在游戏逻辑进行之前，创建铅笔
		this.director.createPencil();
		this.director.run();
	}

	registerEvent() {
		wx.onTouchStart((e) => {
			if (this.director.isGameOver) {
				this.init()
			} else {
				this.director.birdsEvent()
			}
		})
	}

}
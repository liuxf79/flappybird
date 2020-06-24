import { Resources } from "./Resources"

//资源文件加载器，确保在cavase在图片资源加载完成后进行渲染
export class ResourceLoader {
	map = null
	constructor(){
		this.map = new Map(Resources);
		for (let [key,value] of this.map) {
			const image = wx.createImage();
			image.src = value;
			this.map.set(key,image)
		}
	}

	onLoaded(callback){
		let loadedCount = 0;
		for(let value of this.map.values()){
			value.onload = ()=>{
				loadedCount++;
				if(loadedCount >= this.map.size){
					callback(this.map)
				}
			}
		}
	}

	static create(){
		return new ResourceLoader();
	}
}
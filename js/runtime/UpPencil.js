import { Pencil } from "./Pencil";
import { Sprite } from "../base/Sprite";

//上半部分的铅笔
export class UpPencil extends Pencil{
	constructor(top){
		const image = Sprite.getImage('pencilUp');
		super(image,top);
	}
	draw(){
		this.y = this.top - this.height;
		super.draw();
	}

}
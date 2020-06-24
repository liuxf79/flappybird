import {
	Pencil
} from "./Pencil";
import {
	Sprite
} from "../base/Sprite";
import {
	DataStore
} from '../base/DataStore'

//下半部分的铅笔
export class DownPencil extends Pencil {
	constructor(top) {
		const image = Sprite.getImage('pencilDown');
		super(image, top);
	}

	draw() {
		let gap = DataStore.getInstance().canvas.height / 5;
		this.y = this.top + gap;
		super.draw();
	}
}
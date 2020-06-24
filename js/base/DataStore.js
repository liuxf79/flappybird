//变量缓存区，不同的类中访问和修改变量
export class DataStore {

	static getInstance() {
		if (!DataStore.instance) {
			DataStore.instance = new DataStore();
		}
		return DataStore.instance;
	}
	constructor() {
		this.map = new Map()
	}
	put(key, value) {
		if(typeof value==='function'){
			value = new value()
		}
		this.map.set(key, value);
		return this
	}
	get(key) {
		return this.map.get(key)
	}

	destroy() {
		for (let val of this.map.values()) {
			val = null
		}
	}
}
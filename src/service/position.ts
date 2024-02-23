import config from '../config';

type postionType = { x: number; y: number };
class position {
	// 存储坐标

	collection: postionType[] = [];
	// p批量获取坐标
	public getCollection(num: number) {
		let collection = [] as { x: number; y: number }[];
		for (let i = 0; i < num; i++) {
			// 去重复
			while (true) {
				const position = this.position();
				const exists = this.collection.some((c) => c.x == position.x && c.y == position.y);
				if (!exists) {
					collection.push(position);
					this.collection.push(position);
					break;
				}
			}
		}
		return collection;
	}
	// 坐标位置
	public position() {
		return {
			// 随机草地坐标
			x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
			y: Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height + config.model.height * 2,
		};
	}
}
export default new position();

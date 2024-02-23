import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/wall';
// 木墙
class wall extends canvasAbstract {
	num(): number {
		return config.wall.num;
	}
	model(): ModelConstructor {
		return model;
	}

	render(): void {
		// 绘制模型
		super.createModels(); // 先创建
		this.createBoosModels(); // 创建boos墙
		super.renderModels(); // 后绘制
	}

	// 创建boos墙
	createBoosModels(): void {
		// 创建木墙
		const cw = config.canvas.width;
		const ch = config.canvas.height;
		const mw = config.model.width;
		const mh = config.model.height;
		const pos = [
			{ x: cw / 2 - mw * 2, y: ch - mh },
			{ x: cw / 2 - mw * 2, y: ch - mh * 2 },
			{ x: cw / 2 - mw * 2, y: ch - mh * 3 },
			{ x: cw / 2 - mw, y: ch - mh * 3 },
			{ x: cw / 2, y: ch - mh * 3 },
			{ x: cw / 2 + mw, y: ch - mh * 3 },
			{ x: cw / 2 + mw * 2, y: ch - mh * 3 },
			{ x: cw / 2 + mw * 2, y: ch - mh * 2 },
			{ x: cw / 2 + mw * 2, y: ch - mh },
		];
		pos.forEach((position) => {
			const model = this.model() as ModelConstructor;
			const instance = new model(position.x, position.y);
			this.models.push(instance);
		});
	}
}
export default new wall('wall');

import canvasAbstract from './canvasAbstract';
import model from '../model/play';
import config from '../config';
// 水墙
class play extends canvasAbstract {
	num(): number {
		return 0;
	}
	model(): ModelConstructor {
		return model;
	}
	render(): void {
		// 绘制模型
		this.createModels(); // 先创建
		super.renderModels(); // 后绘制
	}
	// 生成模型实例
	protected createModels() {
		const cw = config.canvas.width;
		const ch = config.canvas.height;
		const mw = config.model.width;
		const mh = config.model.height;
		[{ x: cw / 2 + mw * 4, y: ch - mh }].forEach((postion) => {
			const model = this.model();
			const instance = new (model as ModelConstructor)(postion.x, postion.y)!; // 坐标
			this.models.push(instance);
		});
	}
}
export default new play('play');

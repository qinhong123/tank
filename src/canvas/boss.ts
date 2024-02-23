import canvasAbstract from './canvasAbstract';
import model from '../model/boss';
import config from '../config';

// 白墙
class boss extends canvasAbstract implements ICanvas {
	num(): number {
		return 0;
	}
	model(): ModelConstructor {
		return model;
	}
	render(): void {
		// 绘制模型
		this.createBossModel();
		super.renderModels(); // 后绘制
	}
	// 创建boos
	// 生成模型实例
	createBossModel() {
		[{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach((postion) => {
			const model = this.model();
			const instance = new (model as ModelConstructor)(postion.x, postion.y)!; // 坐标
			this.models.push(instance);
		});
	}

}
export default new boss('boss');

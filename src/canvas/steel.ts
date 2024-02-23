import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/steel';

// 白墙
class steel extends canvasAbstract implements ICanvas {
	num(): number {
		return config.steel.num;
	}
	model(): ModelConstructor {
		return model;
	}
	render(): void {
		// 绘制模型
		super.createModels(); // 先创建
		super.renderModels(); // 后绘制
	}
}
export default new steel('steel');

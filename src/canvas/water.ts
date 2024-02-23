import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/water';
// 水墙
class water extends canvasAbstract {
	num(): number {
		return config.water.num;
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
export default new water('water');

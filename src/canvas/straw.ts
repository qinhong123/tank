import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/straw';

// 草地
class straw extends canvasAbstract {
	num(): number {
		return config.straw.num;
	}
	model(): ModelConstructor {
		return model;
	}
	// 父级定义了抽象类,不使用构造方法
	// constructor() {
	// 	super();
	// 	super.createModels();
	// }
	render(): void {
		// 绘制模型
		super.createModels(); // 先创建
		super.renderModels(); // 后绘制
	}
}
export default new straw('straw');

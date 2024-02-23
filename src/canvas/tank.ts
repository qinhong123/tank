import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/tank';
import position from '../service/position';

// 白墙
class tank extends canvasAbstract implements ICanvas {
	intervalId: number = 0; // 定时器id
	num(): number {
		return config.tank.num;
	}
	model(): ModelConstructor {
		return model;
	}
	render(): void {
		// 绘制模型
		this.createModels(); // 先创建
		this.renderModels(); // 后绘制
		// 单独设置重绘时间
		this.intervalId = setInterval(() => this.renderModels(), config.timeout);
	}

	// 游戏停止
	stop() {
		clearInterval(this.intervalId);
	}

	// 将模型渲染到画布上  ---重写坦克模型方法
	public renderModels() {
		this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
		super.renderModels();
	}
	// 生成模型实例 ---重写坦克模型方法
	protected createModels() {
		for (let i = 0; i < this.num(); i++) {
			const pos = position.position();
			const model = this.model();
			const instance = new model(pos.x, 0); // 随机坐标x,y固定值0
			this.models.push(instance);
		}
	}
}
export default new tank('tank');

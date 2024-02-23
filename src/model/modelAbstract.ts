import config from '../config';
import { directionEnum } from '../enum/directionEnum';
import audio from '../service/audio';

// 模型的抽象类
export default abstract class modelAbstract {
	abstract name: string;
	public abstract canvas: ICanvas;
	abstract render(): void;
	abstract image(): HTMLImageElement;
	public width: number = config.model.width;
	public height: number = config.model.height;
	// protected direction: top left bottom right enu
	// 坦克的方向
	public directives: directionEnum = directionEnum.top;

	constructor(public x: number, public y: number) {
		this.randomDirection();
	}

	// 随机产生一个方向
	public randomDirection() {
		let num = Object.keys(directionEnum).length;
		// let b = Object.keys(directionEnum)[Math.random() * Number(num)];
		if (Object.keys(directionEnum).length >= num) {
			// 存储方向
			this.directives = Object.keys(directionEnum)[Math.floor(Math.random() * num)] as directionEnum;
		}
	}

	// 渲染 优化到canvas创建时渲染
	protected draw() {
		this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height);
	}

	// 移除模型
	public destroy() {
		this.canvas.removeModel(this);
		this.canvas.renderModels();
	}

	// 爆炸效果
	protected blast(model: IModel) {
		// 爆炸声音
		audio.blast();

		Array(...Array(8).keys()).reduce((promise, index) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					const img = new Image();
					img.src = `/src/static/images/blasts/blast${index}.gif`;
					img.onload = () => {
						this.canvas.ctx.drawImage(img, model.x, model.y, this.width, this.height);
						resolve(promise);
					};
				}, 50 * index);
			});
		}, Promise.resolve());
	}
}

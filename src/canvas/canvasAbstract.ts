import config from '../config';
import position from '../service/position';
// 定义一个抽象类 管理相同的代码
export default abstract class canvasAbstract {
	public models: IModel[] = []; // 记录模型
	abstract render(): void;
	abstract num(): number;
	abstract model(): ModelConstructor | BulletModelConstructor;

	constructor(
		protected name: string, // canvas名称
		protected app = document.querySelector('#app') as HTMLDivElement,
		protected el = document.createElement('canvas'),
		public ctx = el.getContext('2d')!
	) {
		// 创建画布
		this.createCanvas();
	}
	// 创建画布方法
	private createCanvas() {
		this.el.width = config.canvas.width;
		this.el.height = config.canvas.height;
		this.el.setAttribute('name', this.name); // 设置 画布 name名称
		this.app.appendChild(this.el);
		// this.app.insertAdjacentElement('afterbegin', this.el);
	}
	// 生成模型实例
	protected createModels() {
		position.getCollection(this.num()).forEach((postion) => {
			const model = this.model();
			const instance = new (model as ModelConstructor)(postion.x, postion.y)!; // 坐标
			this.models.push(instance);
		});
	}
	// 将模型渲染到画布上
	public renderModels() {
		this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
		this.models.forEach((model) => model.render());
	}
	// 移除模型
	public removeModel(model: IModel) {
		this.models = this.models.filter((m) => m != model);
	}
}

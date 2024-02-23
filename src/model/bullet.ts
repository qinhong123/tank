import { image } from '../service/image';
import modelAbstract from './modelAbstract';
import bullet from '../canvas/bullet';
import config from '../config';
import { directionEnum } from '../enum/directionEnum';
import util from '../util';
import wall from '../canvas/wall';
import steel from '../canvas/steel';
import water from '../canvas/water';
import boss from '../canvas/boss';
import play from '../canvas/play';
import tank from '../canvas/tank';

// 木墙模型
export default class extends modelAbstract implements IModel {
	public canvas: ICanvas = bullet;
	name: string = 'bullet';
	constructor(public tank: IModel) {
		super(tank.x + config.model.width / 2, tank.y + config.model.height / 2);
		// 存储设置子弹的方向跟坦克的方向相同
		this.directives = tank.directives as unknown as directionEnum;
	}
	image(): HTMLImageElement {
		return image.get('bullet')!;
	}
	//e 实现model里面的render抽象类
	render(): void {
		let x = this.x;
		let y = this.y;
		let step = this.tank.name === 'play' ? 10 : 5; //设置敌我坦克速度 敌方坦克速度为5
		switch (this.directives) {
			case directionEnum.top:
				y -= step;
				break;
			case directionEnum.right:
				x += step;
				break;
			case directionEnum.bottom:
				y += step;
				break;
			case directionEnum.left:
				x -= step;
				break;
		}
		// 碰撞检测
		const touchModel = util.isModelTouch(this.x, this.y, 2, 2, [
			...wall.models,
			...steel.models,
			...water.models,
			...boss.models,
			...play.models,
			...tank.models,
		]);

		if (util.isCanvasTouch(x, y, 2, 2)) {
			this.destroy();
		} else if (touchModel && touchModel.name !== this.tank.name) {
			this.destroy();
			if (touchModel.name !== 'steel') touchModel.destroy(); // 判断是白墙 就不能销毁
			this.blast(touchModel);
		} else {
			this.x = x;
			this.y = y;
			this.draw();
		}
	}
	protected draw() {
		this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2);
	}
}

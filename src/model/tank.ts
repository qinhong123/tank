import tank from '../canvas/tank';
import config from '../config';
import { directionEnum } from '../enum/directionEnum';
import { image } from '../service/image';
import util from '../util';
import modelAbstract from './modelAbstract';
import _ from 'lodash';

// 水模型
export default class extends modelAbstract implements IModel {
	public canvas: ICanvas = tank;
	name: string = 'tank';
	// 实现model里面的render抽象类
	render(): void {
		// 坦克移动
		this.move();
		// 增加随机方向概率
		if (_.random(20) == 1) this.directives = directionEnum.bottom;
	}
	// 坦克移动
	protected move(): void {
		// this.canvas.clearRect(this.x, this.y, config.canvas.width, config.canvas.height);
		while (true) {
			// 存储旧的x,y
			let x = this.x;
			let y = this.y;
			switch (this.directives) {
				case directionEnum.top:
					y--;
					break;
				case directionEnum.right:
					x--;
					break;
				case directionEnum.bottom:
					y++;
					break;
				case directionEnum.left:
					x++;
					break;
			}
			// 碰撞处理isModelTouch
			if (util.isModelTouch(x, y) || util.isCanvasTouch(x, y)) {
				this.randomDirection(); // 随机产生一个新方向
			} else {
				this.x = x;
				this.y = y;
				break;
			}
		}
		super.draw();
	}

	// 随机生成图片
	image() {
		let directives = this.name + _.upperFirst(this.directives);
		// console.log(directives);
		return image.get(directives as keyof typeof config.images)!;
	}
}

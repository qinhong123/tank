import { image } from '../service/image';
import modelAbstract from './modelAbstract';
import play from '../canvas/play';
import _ from 'lodash';
import { directionEnum } from '../enum/directionEnum';
import util from '../util';
import bullet from '../canvas/bullet';
// 玩家模型
export default class extends modelAbstract implements IModel {
	canvas: ICanvas = play;
	name: string = 'play';
	bindEvent = false; // 解决重复调用渲染函数
	image(): HTMLImageElement {
		let direction = this.name + _.upperFirst(this.directives);
		return image.get(direction as any)!;
	}
	// 实现model里面的render抽象类
	render(): void {
		super.draw();
		if (this.bindEvent === false) {
			this.bindEvent = true;
			document.addEventListener('keydown', this.changeDirection.bind(this));
			document.addEventListener('keydown', this.move.bind(this));
			// 玩家子弹
			document.addEventListener('keydown', (event) => {
				console.log(event.code);
				if (event.code === 'Space') bullet.addPlayBullet();
			});
		}
	}

	// 移动事件
	changeDirection(e: KeyboardEvent) {
		switch (e.code) {
			case 'ArrowUp':
				this.directives = directionEnum.top;
				break;
			case 'ArrowRight':
				this.directives = directionEnum.right;
				break;
			case 'ArrowDown':
				this.directives = directionEnum.bottom;
				break;
			case 'ArrowLeft':
				this.directives = directionEnum.left;
				break;
		}
	}
	// 移动位置
	move(event: KeyboardEvent) {
		let x = this.x;
		let y = this.y;
		switch (event.code) {
			case 'ArrowUp':
				y -= 10;
				break;
			case 'ArrowRight':
				x += 10;
				break;
			case 'ArrowDown':
				y += 10;
				break;
			case 'ArrowLeft':
				x -= 10;
				break;
		}

		if (util.isCanvasTouch(x, y) || util.isModelTouch(x, y)) {
			return;
		}
		this.x = x;
		this.y = y;
		this.canvas.renderModels();
	}
}

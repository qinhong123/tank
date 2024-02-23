import { image } from '../service/image';
import modelAbstract from './modelAbstract';
import boss from '../canvas/boss';
// 白墙模型
export default class extends modelAbstract implements IModel {
	canvas: ICanvas = boss;
	name: string = 'boss';
	image(): HTMLImageElement {
		return image.get('boss')!;
	}
	// 实现model里面的render抽象类
	render(): void {
		super.draw();
	}
}

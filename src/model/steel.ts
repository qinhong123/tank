import { image } from '../service/image';
import modelAbstract from './modelAbstract';
import steel from '../canvas/steel';
// 白墙模型
export default class extends modelAbstract implements IModel {
	canvas: ICanvas = steel;
	name: string = 'steel';
	image(): HTMLImageElement {
		return image.get('steel')!;
	}
	// 实现model里面的render抽象类
	render(): void {
		super.draw();
	}
}

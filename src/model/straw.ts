import { image } from '../service/image';
import modelAbstract from './modelAbstract';
import straw from '../canvas/straw';
// 草地模型
export default class extends modelAbstract implements IModel {
	canvas: ICanvas = straw;
	name: string = 'straw';
	image(): HTMLImageElement {
		return image.get('straw')!;
	}
	// 实现model里面的render抽象类
	render(): void {
		super.draw();
	}
}

import { image } from '../service/image';
import modelAbstract from './modelAbstract';
import water from '../canvas/water';
// 水模型
export default class extends modelAbstract implements IModel {
	public canvas: ICanvas = water;
	name: string = 'water';
	image(): HTMLImageElement {
		return image.get('water')!;
	}
	// 实现model里面的render抽象类
	render(): void {
		super.draw();
	}
}

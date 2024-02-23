import { image } from '../service/image';
import modelAbstract from './modelAbstract';
import wall from '../canvas/wall';

// 木墙模型
export default class extends modelAbstract implements IModel {
	public canvas: ICanvas = wall;
	name: string = 'wall';
	image(): HTMLImageElement {
		return image.get('wall')!;
	}
	// 实现model里面的render抽象类
	render(): void {
		super.draw();
	}
}

/// <reference types="vite/client" />

// 模型
interface ModelConstructor {
	new (x: number, y: number): IModel;
}
interface BulletModelConstructor {
	new (tank: IModel): IModel;
}
interface IModel {
	name: string;
	render(): void;
	// image(): HTMLImageElement;
	x: number;
	y: number;
	tank?: IModel;
	width: number;
	height: number;
	directives: string;
	destroy(): void;
}
// 画布类型声明
interface ICanvas {
	num(): number;
	model(): ModelConstructor | BulletModelConstructor;
	ctx: CanvasRenderingContext2D;
	removeModel(model: IModel);
	renderModels(): void;
  stop?():void;
}

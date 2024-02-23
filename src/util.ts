import boss from './canvas/boss';
import steel from './canvas/steel';
import wall from './canvas/wall';
import water from './canvas/water';
import config from './config';

export default {
	// 超出画布移除
	isCanvasTouch(x: number, y: number, width = config.model.width, height = config.model.height): boolean {
		return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height;
	},
	// 碰撞处理
	isModelTouch(
		x: number,
		y: number,
		width = config.model.width,
		height = config.model.height,
		models = [...water.models, ...wall.models, ...steel.models, ...boss.models]
	): IModel | undefined {
		// const models = [...water.models, ...wall.models, ...steel.models];
		return models.find((model) => {
			const state = x + width <= model.x || x >= model.x + model.width || y + height <= model.y || y >= model.y + model.height;

			return !state;
		});
	},
};

import canvasAbstract from './canvasAbstract';
import model from '../model/bullet';
import tank from './tank';
import bullet from '../model/bullet';
import play from './play';
import audio from '../service/audio';

// 水墙
export default new (class extends canvasAbstract implements ICanvas {
	intervalId: number = 0; // 定时器id
	num(): number {
		return 0; // 子弹数量
	}
	model(): BulletModelConstructor {
		return model;
	}
	render(): void {
		// 生成子弹
		this.intervalId = setInterval(() => {
			this.createBullet();
			this.renderModels();
		}, 10);
	}

	// 游戏子弹停止
	stop() {
		clearInterval(this.intervalId);
	}

	// 生成子弹子弹
	createBullet() {
		tank.models.forEach((tankModel) => {
			const isExists = this.models.some((m) => m.tank == tankModel);
			if (!isExists) {
				this.models.push(new bullet(tankModel));
			}
		});
	}

	// 玩家子弹方法
	addPlayBullet() {
		this.models.push(new bullet(play.models[0]));
		// 子弹的声音
		audio.fire();
	}
})('bullet');

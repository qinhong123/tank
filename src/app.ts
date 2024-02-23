import 'minireset.css'; //清除默认样式
import './style.scss';
import config from './config';
import straw from './canvas/straw';
import { promises } from './service/image';
import wall from './canvas/wall';
import water from './canvas/water';
import steel from './canvas/steel';
import tank from './canvas/tank';
import bullet from './canvas/bullet';
import boss from './canvas/boss';
import play from './canvas/play';
import audio from './service/audio';
const app = document.querySelector<HTMLDivElement>('#app')!;
app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';
// 预加载图片
export default {
	isStart: false,
	state: 9,
	interval: 0,
	// 游戏初始化背景
	bootstrap() {
		app.addEventListener('click', async () => {
			audio.start();

			if (this.isStart === false) {
				this.isStart = true;
				app.style.background = 'none';
				await this.start();
			}
			// 判断游戏
			this.interval = setInterval(() => {
				if (tank.models.length == 0) this.state = 1;
				if (play.models.length == 0 || boss.models.length == 0) this.state = 0;
				if (this.state != 9) this.stop();
			}, 100);
		});
	},
	// 游戏停止
	stop() {
		clearInterval(this.interval);
		tank.stop();
		bullet.stop();
		this.text();
	},

	// 游戏结束文字
	text() {
		const el = document.createElement('canvas');
		el.width = config.canvas.width;
		el.height = config.canvas.height;
		const ctx = el.getContext('2d')!;
		ctx.fillStyle = 'red';
		ctx.font = '80px 黑体';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(this.state === 1 ? '恭喜胜利' : '游戏失败', config.canvas.width / 2, config.canvas.height / 2);
		app.appendChild(el);
	},

	// 游戏开始
	async start() {
		await Promise.all(promises);
		// 渲染图
		wall.render(); // 木墙
		water.render(); // 水
		steel.render(); // 白墙
		straw.render(); // 草地
		tank.render(); // 坦克
		bullet.render(); // 子弹
		boss.render(); // boss
		play.render(); // 玩家
	},
};

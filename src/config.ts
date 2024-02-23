// 全局配置文件
import straw from './static/images/straw/straw.png';
import wall from './static/images/wall/wall.gif';
import water from './static/images/water/water.gif';
import steel from './static/images/wall/steels.gif';
import tankLeft from './static/images/tank/left.gif';
import tankTop from './static/images/tank/top.gif';
import tankRight from './static/images/tank/right.gif';
import tankBottom from './static/images/tank/bottom.gif';
import bullet from './static/images/bullet/bullet.jpg';
import boss from './static/images/boss/boss.png';
import playTop from './static/images/player/top.gif';
import playRight from './static/images/player/right.gif';
import playBottom from './static/images/player/bottom.gif';
import playLeft from './static/images/player/left.gif';

export default {
	// 控制速度
	timeout: 10,
	canvas: {
		width: 900,
		height: 600,
	},
	// 控制草地大小
	model: {
		width: 30,
		height: 30,
	},
	// 控制草地生成的数量
	straw: {
		num: 100,
	},
	// 木墙的数量
	wall: {
		num: 100,
	},
	// 水
	water: {
		num: 30,
	},
	// 石头墙
	steel: {
		num: 20,
	},
	// 坦克
	tank: {
		num: 2,
	},

	// 图片信息
	images: {
		straw,
		wall,
		water,
		steel,
		tankTop,
		tankBottom,
		tankLeft,
		tankRight,
		bullet,
		boss,
		playTop,
		playRight,
		playBottom,
		playLeft,
	},
};

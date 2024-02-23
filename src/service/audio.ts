// 声音服务
export default {
	el(id: string) {
		return document.querySelector<HTMLAudioElement>(id)!;
	},
	// 开始的声音
	start() {
		this.el('#aStart').play();
	},
	// 子弹的声音
	fire() {
		this.el('#aFire').play();
	},
  blast(){
    this.el('#aBlast').play();
  }
};

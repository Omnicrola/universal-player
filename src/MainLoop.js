export default class MainLoop {

	static build() {
		return new MainLoop([]);
	}

	
	construct(modules){
		this.modules = modules;
	}

	start() {
		console.log('started!');
		requestAnimationFrame(this._runLoop.bind(this));
	}

	_runLoop() {
		this._update();
		this._render();
		requestAnimationFrame(this._runLoop.bind(this));
	}

	_update() {
		console.log('update!');
	}

	_render() {

	}
}
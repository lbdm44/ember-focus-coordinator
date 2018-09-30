export default class FocusCoordinator {
  private _stack: Array<string | HTMLElement>;

  constructor() {
    this._stack = [];
  }

  public get stack(): Array<string | HTMLElement> {
    return this._stack;
  }

  public set stack(value: Array<string | HTMLElement>) {
    this._stack = value;
  }

  focus(elem: string | HTMLElement) {
    this.stack.push(elem);
  }
}

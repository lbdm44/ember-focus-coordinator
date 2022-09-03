import Service from '@ember/service';
import FocusCoordinator from '../-lib/focus-coordinator';

export default class FocusService extends Service {
  _focusCoordinator: FocusCoordinator | null = new FocusCoordinator();

  willDestroy() {
    this._focusCoordinator = null;
  }

  focus(elem: string | HTMLElement) {
    this._focusCoordinator?.focus(elem);
  }
}

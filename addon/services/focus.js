import Service from '@ember/service';
import FocusCoordinator from '../-lib/focus-coordinator';

export default Service.extend({
  /**
   * @type {FocusCoordinator}
   */
  _focusCoordinator: null,

  init() {
    this._super(...arguments);

    this._focusCoordinator = new FocusCoordinator();
  },

  willDestroy() {
    this._super(...arguments);

    this._focusCoordinator = null;
  },

  /**
   * @param {string|HTMLElement} elem The element (or an Element selector) that
   *  you want to focus onto.
   */
  focus(elem) {
    this._focusCoordinator.focus(elem);
  }
});

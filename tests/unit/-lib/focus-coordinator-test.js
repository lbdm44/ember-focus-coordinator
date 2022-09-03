import { module, test } from 'qunit';
import FocusCoordinator from 'ember-focus-coordinator/-lib/focus-coordinator';

module('Unit | lib | focus-coordinator', function () {
  test('it pushes items into the stack when focusing', function (assert) {
    const focusCoordinator = new FocusCoordinator();
    const itemSelector = '.some-item';

    focusCoordinator.focus(itemSelector);

    assert.deepEqual(
      focusCoordinator.stack.length,
      1,
      'has one item in the focus stack'
    );

    assert.deepEqual(
      focusCoordinator.stack[0],
      itemSelector,
      'has the correct item in the stack'
    );
  });
});

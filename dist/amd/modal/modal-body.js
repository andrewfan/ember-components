define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var ArrayProxy = __dependency1__.ArrayProxy;
    var run = __dependency1__.run;

    var ModalBody, StyleBindingsMixin, WithConfigMixin;

    WithConfigMixin = Em.Eu.WithConfigMixin;

    StyleBindingsMixin = Em.Eu.StyleBindingsMixin;


    /**
     * `{{em-modal-body}}` component.
     *
     * The body of the modal
     *
     * @class ModalBody
     * @public
     */

    ModalBody = Component.extend(WithConfigMixin, StyleBindingsMixin, {
      classNameBindings: ['styleClasses'],

      /**
       * The CSS classes that will be attached to the DOM element of the modal
       * Classes should be configured externally by using the `config` object.
       *
       * @property styleClasses
       * @private
       * @type String
       */
      styleClasses: (function() {
        var _ref;
        return (_ref = this.get('config.modal.bodyClasses')) != null ? _ref.join(" ") : void 0;
      }).property()
    });

    __exports__["default"] = ModalBody;
  });
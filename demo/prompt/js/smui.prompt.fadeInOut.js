(function($, ns) {
    ns.prompt.createPlugin('fadeInOut', {
        options: {
            isFadeInOut: true,
            fadeInOut: {}

        },
        _init: function() {
            var me = this,
                opts = this.options,
                $el = this.$el,
                eventNS = this.eventNS;

            if (opts.isFadeInOut) {
                $el.fadeInOut(opts.fadeInOut);
                $el.on('fadeCompleted', function(e, isInit) {
                    if (isInit) {
                        me._hide();
                    }
                });
            }
            /*获取prompt被组件覆写的方法*/
            me._hide = this.getOverrideFn('hide');
        },
        show: function() {
            var me = this,
                opts = this.options,
                $el = this.$el;

            opts.isFadeInOut ? $el.fadeInOut('show') : $el.show();

            setTimeout(function() {
                me.hide();
            }, opts.hideTime);

        },
        
        hide: function() {
            var me = this,
                opts = this.options,
                $el = this.$el;
            opts.isFadeInOut ? $el.fadeInOut('hide') : me._hide();
        }
    });
})($, smui);
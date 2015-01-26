/**
 * @author mingli
 * @date 2014-10-28
 * @version 0.0.1
 * @file 提示框样式
 * @import smui.js */
(function($, ns) {
    ns.widget('prompt', {
        options: {           
            hideTime: 2000,           
            content: ''            
        },       
        addContent: function(html) {
            this.$el.html(html);
        },
        show: function() {
            var me = this,
                opts = this.options,
                $el = this.$el;           
                $el.show();          
            setTimeout(function() {
                me.hide();
            }, opts.hideTime);
        },        
        hide: function() {
            this.$el.hide();
            this.trigger('close');
        }
    })

})(Zepto, smui);
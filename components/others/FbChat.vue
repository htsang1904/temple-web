<template>
    <div id="fb-customer-chat" class="fb-customerchat" attribution="biz_inbox" v-bind="config" />
</template>

<script>
export default {    
    name: 'FacebookCustomerChatComponent',
    props: {
        themeColor: {
            type: String,
            validator: value => /^#[0-9A-F]{6}$/i.test(value) && value.toLowerCase() !== '#ffffff'
        },
        loggedInGreeting: {
            type: String,
            validator: value => value.length <= 80
        },
        loggedOutGreeting: {
            type: String,
            validator: value => value.length <= 80
        },
        greetingDialogDisplay: {
            type: String,
            default: 'show',
            validator: value => ['hide', 'show', 'fade', 'icon'].indexOf(value) !== -1
        },
        greetingDialogDelay: {
            type: [Number, String],
            default: 0
        }
    },
    mounted() {
        this.script(document, 'script', 'fb-customer-chat-jssdk');
    },
    computed: {
        config() {
            return {
                page_id: '107612654963722',
                theme_color: this.themeColor,
                logged_in_greeting: this.loggedInGreeting,
                logged_out_greeting: this.loggedOutGreeting,
                greeting_dialog_display: this.greetingDialogDisplay,
                greeting_dialog_delay: this.greetingDialogDelay
            };
        }
    },
    methods: {
        fbAsyncInit() {
            FB.init({
                xfbml: true,
                version: 'v13.0'
            });
        },
        script(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            this.root(d, 'fb-root');
            if (!window.fbAsyncInit) {
                window.fbAsyncInit = this.fbAsyncInit;
            }
            js = d.createElement(s);
            js.id = id;
            js.async = js.defer = true;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        },
        root(d, id) {
            if (d.getElementById(id)) {
                return;
            }
            var el = d.createElement('div');
            el.id = id;
            d.body.appendChild(el)
        }
    }
}
</script>

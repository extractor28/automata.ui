
<template>
    <v-avatar size="300">
        <img
            src="https://cdn.discordapp.com/avatars/689943352711446627/c6de05a6acfe0aeb3e0ab4af1060f722.png?size=4096"
            alt="John">
    </v-avatar>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue';
// import Commands from '~/components/Commands.vue'
// import Commands from '~/components/Commands.vue'

export default {
    components: {
        // AppLogo,
        // Commands
    },
    mounted() {
        try {
            this.$OneSignal.push(() => {
                this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
                    if (isEnabled) {
                        console.log('Push notifications are enabled!');
                    } else {
                        console.log('Push notifications are not enabled yet.');
                    }
                });
            });

            // this.$OneSignal.sendSelfNotification(
            //     /* Title (defaults if unset) */
            //     'Automata Discord Bot',
            //     /* Message (defaults if unset) */
            //     'Action buttons increase the ways your users can interact with your notification.',
            //     /* URL (defaults if unset) */
            //     'https://example.com/?_osp=do_not_open',
            //     /* Icon */
            //     'https://onesignal.com/images/notification_logo.png',
            //     {
            //         /* Additional data hash */
            //         notificationType: 'news-feature',
            //     },
            //     [{ /* Buttons */
            //         // eslint-disable-next-line max-len
            //         /* Choose any unique identifier for your button. The ID of the clicked button is passed to you so you can identify which button is clicked */
            //         id: 'like-button',
            //         /* The text the button should display. Supports emojis. */
            //         text: 'Like',
            //         // eslint-disable-next-line max-len
            //         /* A valid publicly reachable URL to an icon. Keep this small because it's downloaded on each notification display. */
            //         icon: 'http://i.imgur.com/N8SN8ZS.png',
            //         // eslint-disable-next-line max-len
            //         /* The URL to open when this action button is clicked. See the sections below for special URLs that prevent opening any window. */
            //         url: 'https://example.com/?_osp=do_not_open',
            //     },
            //     {
            //         id: 'read-more-button',
            //         text: 'Read more',
            //         icon: 'http://i.imgur.com/MIxJp1L.png',
            //         url: 'https://example.com/?_osp=do_not_open',
            //     }],
            // );

            this.$OneSignal.push(() => {
                this.$OneSignal.on('notificationDisplay', (event) => {
                    console.warn('OneSignal notification displayed:', event);
                });

                // This event can be listened to via the `on()` or `once()` listener
            });

            // const myCustomUniqueUserId = 'myCustomId';
            // this.$OneSignal.push(() => {
            //     this.$OneSignal.on('subscriptionChange', (isSubscribed) => {
            //         if (isSubscribed) {
            //             // The user is subscribed
            //             //   Either the user subscribed for the first time
            //             //   Or the user was subscribed -> unsubscribed -> subscribed
            //             this.$OneSignal.push(() => {
            //                 this.$OneSignal.setExternalUserId(myCustomUniqueUserId);
            //             });
            //         }
            //     });
            // });

            this.$OneSignal.push(() => {
                this.$OneSignal.on('subscriptionChange', (isSubscribed) => {
                    if (isSubscribed) {
                        this.$OneSignal.push(() => {
                            this.$OneSignal.sendTag('user_id', 'myCustomId');
                        });
                    }
                });
            });

            this.$OneSignal.push(async () => {
                const user = await this.$OneSignal.getExternalUserId();
                console.log('ExternalUserId', user);
            });
        } catch (error) {
            console.error(error);
        }
    },
};
</script>

<style>
</style>


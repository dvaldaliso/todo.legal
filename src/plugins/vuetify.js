import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify,{
    theme: {
        primary: '#2C4477',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
});

export default new Vuetify({
});

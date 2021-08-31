<template>
  <v-app>
    <v-container
    pa-0
    fill-height fluid
    >
      <v-main>
        <Logo/>
        <div class="box resp">
           <router-view></router-view>
        </div>
        <v-layout  align-center justify-center >
        <v-footer  height="auto" class="pa-3">
         <span class="text-caption" :style="{color:'#2C4477'}" >{{isLoginPage}}</span>
       </v-footer>  
        </v-layout>
     </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Logo from './components/Logo';

export default {
  name: 'App',

  components: {
    Logo
  },

  data: () => ({
    //
  }),
   computed: {
    isLoginPage () {
       let footer='Exament by '  
        if(this.$route.name === 'Registrar'){
            footer="Smart Contancts by "
        }else{
          footer="Gestor de Proceso by "
        }

      return footer+"Todo.legal"
    }
  },
};
</script>
<style scoped>
.box{
    border-radius: 0px 100px 0px 100px;
    background-color:#FAFAFA;
    float: none;
    position: relative;
}
.cardColor {
   background-color: rgba(255, 255, 255, 0.5) !important;
   border-color: white !important;
 }
li a {
  text-decoration: none;
}

@media only screen and (min-width: 600px) {
 .resp{
   margin: 25px;
 }
}
@media only screen and (min-width: 800px) {
 .resp{
   margin: 50px;
 }
}
</style>

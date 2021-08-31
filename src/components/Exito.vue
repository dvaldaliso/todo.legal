<template>
      <v-card
        color="#FAFAFA"
        class="cardColor elevation-0 "
      >
           <v-row align="center" justify="center"> 
             <v-icon color="#42B852" size="60">
               mdi-checkbox-marked-circle-outline
              </v-icon>
           </v-row>
          <v-row align="center" justify="center" class=" ma-2 pa-2"> 
            <h2 class="One"  :style="{color:'#2C4477'}">¡Validación Exitosa!</h2>
           </v-row>
            <div  class="rounded-card" >
              <v-row  class=" pa-4">
                <v-col class=" ma-5">
                <v-row  class="ma-2" > 
                   <h3 :style="{color:'#2C4477'}" >Datos Verificados:</h3>
                </v-row>
                <v-row class="ma-2">
                  <hr style="height:5px; width:50%;margin:0;background: #2C4477"> 
                </v-row>
                 <v-row class="ma-2">
                  <h3 :style="{color:'#2C4477'}">
                      Nombre y Apellidos 
                   </h3>
                </v-row>
                <v-row class="ma-2">
                  {{nombre}}
                </v-row>
                  <v-row class="ma-2">
                  <h3 :style="{color:'#2C4477'}">
                      Cédula de Identidada
                   </h3>
                  
                </v-row>
                <v-row class="ma-2">
                   {{user.username}}
                </v-row>
                </v-col>
               </v-row> 
            </div>
         
        <v-card-actions>
         <v-col>
            <v-row>
            <v-spacer></v-spacer>
               <v-btn
              class="ml-0 primary--text"
              depressed
              @click="finalizar"
            >
              FINALIZAR
              <v-icon
            color="primary"
            right
           >
            mdi-arrow-right-bold-circle-outline
          </v-icon>
            </v-btn>
            </v-row>
         </v-col>
        </v-card-actions>
      </v-card>
</template>
<script>
  export default {
    name: 'Exito',
    data: () => ({
      user:Object,
     
    
    }),
    mounted (){
    this.valid=false
    if(this.$store.getters.CURRENT_USER !=null){
      this.user=this.$store.getters.CURRENT_USER
    }else{
      this.$router.push({ name: 'Login'})
      alert('debe registrarse')
    }
    
    },
    methods: {
      finalizar () {
         this.$store.dispatch('FINALIZAR').then(result => {
          if (result === null) {
             this.$router.push({ name: 'Login'})
              console.log('success')
          } else {
          console.log('no finalizo')
          }
        })
       
        
      },
     },
    computed: {
    nombre () {
      return this.user.name +' '+this.user.lastname 
    }
    
  },
  }
</script>

<style scoped>

.rounded-card{
   border-radius:0px 80px 0px 80px;
    background-color:#FFFFFF;
    margin: 30px;
}

</style>
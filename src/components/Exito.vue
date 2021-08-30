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
                <v-row align="center" > 
                   <h3 :style="{color:'#2C4477'}" >Datos Verificados:</h3>
                </v-row>
                <v-row >
                  <hr style="height:5px; width:50%;margin:0;background: #2C4477"> 
                </v-row>
                 <v-row >
                  <h3>
                      Nombre y Apellidos 
                   </h3>
                </v-row>
                <v-row>
                  {{nombre}}
                </v-row>
                  <v-row >
                  <h3 >
                      Cédula de Identidada
                   </h3>
                  
                </v-row>
                <v-row>
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
    this.user=this.$store.getters.CURRENT_USER
    },
    methods: {
      continuar () {
        if(this.$refs.form.validate()){
          console.log('asd')
        }
       
        
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
    background-color:blue;
    margin: 30px;
}

</style>
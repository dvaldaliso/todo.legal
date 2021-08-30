<template>
      <v-card
      color="#FAFAFA"
        class="elevation-0 "
      >
      <v-col class=" pa-0">
        <v-row align="center" justify="center"> 
             <v-icon color="#42B852" size="60">
               mdi-checkbox-marked-circle-outline
              </v-icon>
           </v-row>
          <v-row align="center" justify="center" class=" ma-2 pa-2"> 
            <h2 class="One"  :style="{color:'#2C4477'}">¡Validación Exitosa!</h2>
           </v-row>
           
          </v-col>
         <v-col>
          <v-row align="center" class=" ml-2 mr-2 pl-2 pr-2">        
            <v-card-text >
              <v-row align="center" justify="center" class=" ma-2 pa-2"> 
              <hr style="height:5px; width:50%;margin:0;background: #2C4477"> 
           </v-row>
               lsls
            </v-card-text>
          </v-row>
          </v-col>
          <v-card-actions>
            <v-col>
            <v-row justify="center">

            </v-row>
            <v-row>
            <v-spacer></v-spacer>

               <v-btn
              class="ml-0 primary--text"
              depressed
              :loading=loading
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
    data: () => ({
      valid: false,
      loading:false,
      show1: false,
      cedula: null,
       pass: null,
      cedulaRules: [
        v => !!v || 'Cédula de la Identidad es requerida',
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
     
      contrasenalRules: [
        v => !!v || 'contraseña es requerida',
      ],
    
    }),
    mounted (){
    this.valid=false
    },
    methods: {
      continuar () {
        if(this.$refs.form.validate()){
         this.loading=true
        }
       
        
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>


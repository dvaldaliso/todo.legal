<template>
      <v-card
        class="cardColor elevation-0 "
      >
      <v-col class=" pa-0">
          <v-row align="center" justify="center" class=" ma-2 pa-2"> 
            <h2 class="One"  :style="{color:'#2C4477'}"> Crear Cuenta Gratis</h2>
           </v-row>
           <v-row align="center" justify="center" class=" ma-2 pa-2"> 
              <hr style="height:5px; width:50%;margin:0;background: #2C4477"> 
           </v-row>
          </v-col>
         <v-col>
          <v-row align="center" class=" ml-2 mr-2 pl-2 pr-2">        
            <v-card-text >
              <v-row justify="center" > 
                <p justify="center" align="center" :style="{color:'#2C4477'}">
                  Ingrese los siguientes datos para <br />
                    para registrarte como nuevo usuario.
                </p>
              </v-row> 
              <v-form
                ref="form"
                v-model="valid"
              >
                <v-row justify="center"> 
                  <v-text-field
                      v-model="cedula"
                      :rules="cedulaRules"
                      label="Cédula de la Identidad"
                      color="#67D5EE"
                      filled
                      required
                  >
                  </v-text-field>
                </v-row>
                <v-row justify="center"> 
                  <v-text-field
                    v-model="pass"
                    :rules="contrasenalRules"
                    label="Contraseña"
                    color="#67D5EE"
                    filled
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1"
                    :type="show1 ? 'text' : 'password'"
                    required                     
                  ></v-text-field>
                </v-row>
                <v-row justify="center"> 
                  <v-text-field
                    v-model="passconfirm"
                    :rules="contrasenalconfRules"
                    label="Confirmar Contraseña"
                    color="#67D5EE"
                    filled
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1"
                    :type="show1 ? 'text' : 'password'"
                    required                     
                  ></v-text-field>
                </v-row>
              </v-form>    
            </v-card-text>
          </v-row>
          </v-col>
          <v-card-actions>
            
            <v-spacer></v-spacer>

               <v-btn
              :disabled="!valid"
              class="ml-0 primary--text"
              @click="registrar"
              depressed
              :loading=loading
            >
              Registrar
              <v-icon
            color="primary"
            right
           >
            mdi-arrow-right-bold-circle-outline
          </v-icon>
            </v-btn>
          
           
          </v-card-actions>
      </v-card>
</template>
<script>
//import UserService from "../services/UserService";
  export default {
    data: () => ({
      valid: false,
      loading:false,
      show1: false,
      cedula: null,
       pass: null,
       passconfirm: null,
       result:[           
       ],
      cedulaRules: [
        v => !!v || 'Cédula de la Identidad es requerida',
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
     
      contrasenalRules: [
        v => !!v || 'contraseña es requerida',
      ],
       contrasenalconfRules: [
        v => !!v || 'contraseña es requerida',
      ],
    
    }),
    mounted (){
    this.valid=false
      if(this.$store.getters.CURRENT_USER ==null){
      this.$router.push({ name: 'Login'})
      alert('debe registrarse')
    }
    },
    methods: {
      registrar () {
        if(this.$refs.form.validate()){
         this.loading=true
         let post = {
            name: "David",
            last_name: "Vald Lopez",
            phone_number: "8091010101",
            email: "ddd.xxx@todolegal.com",
            username: this.cedula,
            password: this.pass
        };

          this.$store.dispatch('REGISTRO', post).then(error => {
          this.loading = false
          if (error === null) {
              console.log('success')
          } else {
            let { data, status } = error
            if (status === 422) {
             alert('error validacion')
            } else {
              // mostrando el error al usuario en una notificación
              console.log(data.msg)
              alert(data.msg)
            }
          }
        })
     
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


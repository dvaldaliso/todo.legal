<template>
      <v-card
     
      color="#FAFAFA"
        class="cardColor elevation-0 "
      >
      <v-col class=" pa-0">
          <v-row align="center" justify="center" class=" ma-2 pa-2"> 
            <h2 class="One"  :style="{color:'#2C4477'}"> Bienvenido Usuario</h2>
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
                  Por favor ingresa a tu cuenta Ingresando tu <br />
                    número de cedula y contraseña.Si no <br />
                    tienes cuenta en TodoLegal, puedes <br />
                    crear una Gratis.
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
                  <v-tooltip slot="append" bottom>
                <template v-slot:activator="{ on }">
                    <v-icon v-on="on" color="#67D5EE" light>
                      mdi-alert-circle-outline mdi-rotate-180
                    </v-icon>
                  </template>
                  <span >Tu Cédula debe encontrarse vigente para ingresar al sistema</span>
                  </v-tooltip>
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
              </v-form>    
            </v-card-text>
          </v-row>
          </v-col>
          <v-card-actions>
            <v-col>
            <v-row justify="center">
               <router-link style="text-decoration:none" to="/registrar">No tengo cuenta, crear una gratis</router-link>

            </v-row>
            <v-row>
            <v-spacer></v-spacer>

               <v-btn
              :disabled="!valid"
              class="ml-0 primary--text"
              @click="continuar"
              depressed
              :loading=loading
            >
              Continuar
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
         this.loading = true
        if(this.$refs.form.validate()){
        let post = {
                  username: this.cedula,
                  password: this.pass
        };
         this.$store.dispatch('UPDATE_Token',null)
          this.$store.dispatch('LOGIN', post).then(result => {
          this.loading = false
          if (result.error === null) {
             this.$router.push({ name: 'Exito'})
              console.log('success')
          } else {
            let { data, status } = result.error
            if (status === 422) {
             console.log('error validacion')
            } else {
              // mostrando el error al usuario en una notificación
              console.log(data)
            }
          }
        })
        } else {
        this.loading = false
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


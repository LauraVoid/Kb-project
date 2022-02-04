<template>
  <v-container>
    <v-card height="250" flat></v-card>
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="4"> </v-col>

      <v-col cols="12" sm="4" md="4" lg="4">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card
            flat>
                <v-card-title>Log In</v-card-title>

                <v-text-field
            v-model="username"
            label="Username"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            outlined
            type="password"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate()"
          >
            Login
          </v-btn>

            </v-card>
          
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
      valid: true,
      username: '',
      password:'',
  }),
  methods: {
      validate () {
        if (this.username === "admin") {
            if(this.password === "admin"){
                console.log("login")
            }
        }
      }
  },
};
</script>

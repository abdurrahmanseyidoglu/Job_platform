<template>
  <div class="container fadeInDown">
    <div class="formContent">
      <!-- Tabs Titles -->
      <router-link to="/signin"
        ><h3 class="inactive underlineHover">تسجيل الدخول</h3></router-link
      >
      <h3 class="active">إنشاء حساب جديد</h3>

      <!-- Login Form -->
      <vee-form :validation-schema="schema" @submit="register">
        <vee-field
          as="input"
          type="text"
          class="fadeIn first username"
          name="الاسم"
          placeholder="اسم المستخدم"
        />
        <ErrorMessage
          v-bind:style="{
            textTransform: capitalize,
            color: redColor,
            fontSize: fontSize + 'px',
          }"
          name="الاسم"
        />
        <vee-field
          as="input"
          type="text"
          class="fadeIn second email"
          name="الايميل"
          placeholder="الايميل"
        />
        <ErrorMessage
          v-bind:style="{
            textTransform: capitalize,
            color: redColor,
            fontSize: fontSize + 'px',
          }"
          name="الايميل"
        />
        <div>
          <vee-field
            as="input"
            :type="passwordFieldType"
            v-model="password"
            class="fadeIn third password"
            name="كلمة_المرور"
            placeholder="كلمة المرور"
          />
          <i
            class="fas fa-eye-slash toggleShow fadeIn fourth"
            type="password"
            @click="switchVisibility"
          ></i>
        </div>
        <ErrorMessage
          v-bind:style="{
            textTransform: capitalize,
            color: redColor,
            fontSize: fontSize + 'px',
          }"
          name="كلمة_المرور"
        />
        <vee-field
          as="input"
          type="password"
          class="fadeIn fourth confirmPassword"
          name="تأكيد_كلمة_المرور"
          placeholder="تأكيد كلمة المرور"
          data="تأكيد كلمة مرور"
        />
        <ErrorMessage
          v-bind:style="{
            textTransform: capitalize,
            color: redColor,
            fontSize: fontSize + 'px',
          }"
          name="تأكيد_كلمة_المرور"
        />

        <input type="submit" class="fadeIn fourth" value="إنشاء حساب" />
      </vee-form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <router-link to="/reset-password"
          ><a class="underlineHover" href="#">نسيت كلمة السر</a></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schema: {
        الاسم: "required|min:4|max:20",
        الايميل: "required|min:10|max:100|email",
        كلمة_المرور: "required|min:6|max:70",
        تأكيد_كلمة_المرور: "required|confirmed:@كلمة_المرور",
      },
      redColor: "red",
      fontSize: 16,
      capitalize: "capitalize",

      password: "",
      passwordFieldType: "password",
    };
  },
  methods: {
    register(values) {
      console.log(values);
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");
.toggleShow {
  position :absolute;
  margin: 20px 0 0 -40px ;
  &:hover{
    cursor: pointer;
  }
  &:active{
    color: green;
  }
  
}
span {
  display: flex;
  flex-flow: column wrap;
}

.underlineHover {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h3 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  @include mq(tablet, max) {
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 100px;
  }
}

.formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h3.inactive {
  color: #cccccc;
}

h3.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: $blue;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: darken($blue, 20%);
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"],
input[type="password"],
input[type="passwordFieldType"] {
  background-color: #eaecee;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid white;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

/* OTHERS */

*:focus {
  outline: none;
}
</style>

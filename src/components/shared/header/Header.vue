<template>
  <div class="nav-header-desktop">
    <nav class="container">
      <div class="nav-left">
        <router-link to="/signin"
          ><button class="sign-in">
            <i class="far fa-sign-in-alt"></i> تسجيل دخول
          </button></router-link
        >
        <router-link to="signup"
          ><button class="sign-up">
            <i class="far fa-user-plus"></i> انضم الى منور
          </button></router-link
        >
        </div>
     
      <div class="nav-right">
        <ul>
          <li>
            <router-link to="/" class="link">
              الرئيسية <span class="home-icon"><i class="far fa-home"></i></span
            ></router-link>
          </li>
          <li>
            <router-link to="/applications" class="link">
              الطلبات <i class="far fa-list"> </i>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="link">
              تواصل معنا
              <span class="contact-icon">
                <i class="fal fa-envelope-square"></i
              ></span>
            </router-link>
          </li>
          <li><router-link to="/about" class="link">حول منور</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="line"></div>
  </div>

  <div class="mobile-nav">
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <li>
            <router-link to="/" class="link"> الرئيسية</router-link>
          </li>
           <li>
            <router-link to="/applications" class="link">
              الطلبات </router-link>
          </li>
          <li>
            <router-link to="/contact" class="link"> تواصل معنا </router-link>
          </li>
          <li>
            <router-link to="/about" class="link">حول منور</router-link>
          </li>
          <li>
            <router-link to="/signin"
              ><button class="sign-in">
                <i class="far fa-sign-in-alt"></i> تسجيل دخول
              </button></router-link
            >
          </li>
          <li>
            <router-link to="signup"
              ><button class="sign-up">
                <i class="far fa-user-plus"></i> انضم الى منور
              </button></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    // ...mapMutations(['toggleAuthModal']),
    // toggleAuthModal(){
    //   this.$store.commit('toggleAuthModal');
    // },
  },
};
</script>
<style lang="scss" scoped>
.nav-header-desktop {
  
  background-color:white;
   .container {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    padding: 10px 20px;
    @include mq(tablet, max) {
      display: none;
    }
    .nav-left {
      margin-top: 10px;
      .sign-up {
        background: $blue;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        align-items: center;
        border: white solid 1px;
        white-space: nowrap;
        padding: 0.5rem 1.25rem;
        border-radius: 7px;
        margin-left: 20px;
        &:hover {
          background-color: darken($blue, 20%);
        }
        &:active {
          transition: all 0.3s ease-in-out;
          background-color: darken($blue, 30%);
        }
      }
      .sign-in {
        background-color: #eaecee;
        color: #363f4a;
        font-weight: 600;
        font-size: 1.2rem;
        cursor: pointer;
        text-align: center;
        border: white solid 1px;
        white-space: nowrap;
        padding: 0.5rem 1.25rem;

        border-radius: 7px;
        &:hover {
          background-color: darken(#eaecee, 20%);
        }
        &:active {
          transition: all 0.3s ease-in-out;
          background-color: darken(#eaecee, 30%);
        }
      }
    }
    .nav-right {
      display: flex;
      flex-flow: row wrap;
      ul {
        display: flex;
        flex-flow: wrap row;
        list-style: none;
        gap: 20px;
        font-size: 1.2rem;
      }
      li {
        :hover {
          background-color: darken(#eaecee, 20%);
          border-radius: 5px;
        }
        a {
          text-decoration: none;
          font-weight: bold;
          text-transform: uppercase;
          color: gray;
          padding: 5px;
        }
      }
    }
  }
  .line {
    border: 0.3px rgb(240, 240, 240) solid;
    background-color: rgb(240, 240, 240);
  }
  hr {
    border: 0;
    height: 0;
    margin: 1.5rem 0;
    border-top: 1px solid var(--color-gray);
  }
}

.mobile-nav {
  display: none;
  @include mq(tablet, max) {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
}
.sign-in {
  background-color: #eaecee;
  color: #363f4a;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  border: white solid 1px;
  white-space: nowrap;
  padding: 0.5rem 1.25rem;

  border-radius: 7px;
  &:hover {
    background-color: darken(#eaecee, 20%);
  }
  &:active {
    border: red solid 1px;
  }
}
.sign-up {
  background: $blue;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: white solid 1px;
  white-space: nowrap;
  padding: 0.5rem 1.25rem;
  border-radius: 7px;
  &:hover {
    background-color: darken($blue, 20%);
  }
  &:active {
    border: red solid 1px;
  }
}
#menuToggle {
  display: block;
  position: relative;
  top: 50px;
  left: 50px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: rgb(33, 11, 230);
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;

  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;

  
}

#menuToggle input:checked ~ ul {
  transform: none;
  
}
</style>

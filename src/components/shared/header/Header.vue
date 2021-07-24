<template>
  <div class="nav-header">

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
            <router-link to="/" class="link"
              ><span class="home-icon"><i class="far fa-home"></i></span>
              الرئيسية</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="link"
              ><span class="contact-icon"> <i class="fal fa-envelope-square"></i></span>
              تواصل معنا
            </router-link>
          </li>
          <li><router-link to="/about" class="link">حول منور</router-link></li>
        </ul>
       
      </div>
    </nav>
    <div class="line"></div>
  
  </div>
 
</template>
<script>
export default {

}

</script>
<style lang="scss" scoped>
.nav-header {
  .container {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    padding: 10px 20px;
    @include mq(tablet, max) {
      display: none;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
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
          border: red solid 1px;
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
          background-color: rgb(240, 240, 240);
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
</style>

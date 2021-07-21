<template>
  <div class="header">
    <nav class="container">
      <div class="nav-left">
        <router-link to="#"><button class="sign-up">تسجيل دخول</button></router-link>
        <router-link to="#"><button class="sign-in">انضم الى منور</button></router-link>
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
        <div class="logo-img">
          <router-link to="/">
            <img src="@/assets/images/logo.jpg" alt="Logo Image"
          /></router-link>
        </div>
      </div>
    </nav>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style lang="scss">
.header {
  .container {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    padding: 10px 20px;

    .nav-left {
      .sign-in {
        background: $blue;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        height: 2.25rem;
        line-height: 2.25rem;
        font-weight: 600;
        text-align: center;
        border: white solid 1px;
        white-space: nowrap;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        border-radius: 7px;
        margin-left: 20px;
        &:hover {
          background-color: darken($blue, 20%);
        }
        &:active{
          border: red solid 1px;
        }
      }
      .sign-up {
      
        background-color: #eaecee;
        color: #363f4a;
        font-weight: 600;
        font-size: 1.2rem;
        cursor: pointer;
        height: 2.25rem;
        line-height: 2.25rem;
        text-align: center;
        border: white solid 1px;
        white-space: nowrap;
        padding-left: 1rem;
        padding-right: 1.25rem;
        border-radius: 7px;
        &:hover {
          background-color: darken(#eaecee, 20%);
        }
        &:active{
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

      .logo-img {
        img {
          width: 40px;
          height: 40px;
          margin-left: 20px;
        }
      }
    }
  }
  .line {
    border: 0.3px rgb(240, 240, 240) solid;
    background-color: rgb(240, 240, 240);
  }
}
</style>

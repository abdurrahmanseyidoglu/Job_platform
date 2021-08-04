<template>
  <footer>
    <div class="container">
      <div class="about-us">
        <ul>
          <li><span>وسائل التواصل الاجتماعي</span></li>
          <a href="#"
            ><li><i class="fab fa-facebook"></i> فيسبوك</li></a
          >
          <a href="#"
            ><li><i class="fab fa-twitter"></i> تويتر</li></a
          >
          <a href="#"
            ><li><i class="fab fa-instagram"></i> انستقرام</li></a
          >
          <a href="#"
            ><li><i class="fab fa-linkedin-in"></i> لينكيد ان</li></a
          >
        </ul>
      </div>

      <div class="features">
        <ul>
          <li><span>طرق التواصل</span></li>
          <li>
            <a href="mailto:apps@el-abda3.com"
              ><i class="far fa-envelope"></i> Mnawer@gmail.com</a
            >
          </li>
          <li>
            <a href="tel:5525853018"><i class="far fa-phone"> اتصل بنا</i></a>
          </li>
          <li>
            <a href="tel:5525853018"><i class="fab fa-whatsapp"> واتساب</i></a>
          </li>
        </ul>
      </div>
      <div class="resources">
        <ul>
          <li><span>خدماتنا</span></li>
          <router-link to=""><li>الرئيسية</li></router-link>
          <router-link to=""><li>سياسة الاستخدام</li></router-link>
        </ul>
      </div>
      <div class="breif">
        <img src="@/assets/images/logo.jpg" alt="Logo Image" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, cumqueelit.
          Provident, cumque..
        </p>
      </div>
      <!-- <router-link to="/signup"
        ><button class="sign-up">انضم الى منور</button></router-link
      > -->
    </div>
  </footer>
</template>

<script></script>

<style lang="scss">
footer {
  background-color: #eaecee;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  margin: 50px;
  border-radius: 7px;
  @include mq(tablet, max) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding-top: 0px;
    padding-bottom: 10px;
  }

  bottom: 0;
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    @include mq(tablet, max) {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      margin-top: 0px;
      ul {
        text-align: center;
        margin: auto;
        padding: 0;
      }
      li {
        margin: 0;
        padding: 0;
      }
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: #316782;
    }
    li {
      margin-top: 10px;
      span {
        color: black;
        font-weight: bold;
        line-height: 50px;
      }
    }

    .breif {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      @include mq(tablet, max) {
        display: none;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
    .sign-up {
      display: flex;
      align-items: center;
      justify-content: center;
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
      margin-top: 10px;
      &:hover {
        background-color: darken($blue, 20%);
      }
      &:active {
        border: red solid 1px;
      }
    }
    p {
      width: 50%;
      word-break: break-all;
    }
  }
}
</style>

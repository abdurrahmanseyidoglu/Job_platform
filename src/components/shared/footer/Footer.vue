<template>
  <footer>
    <div class="container">
      <div class="about-us">
        <ul>
          <router-link to="">
            <li><span>وسائل التواصل الاجتماعي</span></li></router-link
          >
         <a href="#"><li><i class="fab fa-facebook"></i> فيسبوك</li></a>
         <a href="#"><li><i class="fab fa-twitter"></i> تويتر</li></a>
         <a href="#"><li><i class="fab fa-instagram"></i> انستقرام </li></a>
         <a href="#"><li><i class="fab fa-linkedin-in"></i> لينكيد ان</li></a>
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
          <router-link to=""
            ><li><span>خدماتنا</span></li></router-link
          >
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
        <router-link to="/signup" ><button class="sign-up">انضم الى منور</button></router-link>
      </div>
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
  padding: 50px 0px;
  margin: 50px;
  border-radius: 7px;

  bottom: 0;
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
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
      img {
        width: 50px;
        height: 50px;
      }
    }
    p {
      width: 50%;
      word-break: break-all;
    }
  }
}
</style>

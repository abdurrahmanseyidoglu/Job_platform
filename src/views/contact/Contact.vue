<template>
  <div class="contact">
    <div class="contact__header">
      <div class="contact__header-form">
        <p class="contact__header-form-contact-us">تواصل معنا</p>
        <div class="contact__header-info">
          <div class="contact__header-phone-adress">
            <ul>
              <li><h3>هاتف</h3></li>
              <li><p>(544)444-444</p></li>
            </ul>
            <ul>
              <li><h3>العنوان</h3></li>
              <li><p>5678 EXtrea RD. Lorem ipsum dolor sit.</p></li>
            </ul>
          </div>
          <div class="contact__header-email">
            <ul>
              <li><h3>الايميل</h3></li>
              <li><p>abdurrahmanseyidoglu@gmail.com</p></li>
            </ul>
          </div>
        </div>
        <form @submit.prevent="send" class="contact__form">
          <div class="contact__form-nameMail">
            <input type="text" name="name" class="contact-mail" placeholder="الاسم" />
            <input
              type="text"
              name="email"
              class="contact-password"
              placeholder="الايميل"
            />
          </div>
          <div class="contact__form-message">
            <textarea
              type="text"
              name="message"
              class="contact-message"
              placeholder="رسالتك"
            />
          </div>
          <div class="contact__form-btn">
            <input type="submit" value="إرسال" />
          </div>
          <h2 class="messageSent"></h2>
        </form>
      </div>
    </div>
    <div class="faq">
      <div class="faq-header">الأسئلة الشائعة</div>
      <br />

      <div class="content">
        <div>
          <input type="checkbox" id="question1" class="questions" />
          <div class="plus">+</div>
          <label for="question1" class="question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, culpa?
          </label>
          <div class="answers">
            TLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, culpa? .
          </div>
        </div>

        <div>
          <input type="checkbox" id="question2" class="questions" />
          <div class="plus">+</div>
          <label for="question2" class="question"> Short? </label>
          <div class="answers">short!</div>
        </div>

        <div>
          <input type="checkbox" id="question3" class="questions" />
          <div class="plus">+</div>
          <label for="question3" class="question">
            KeepLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, culpa?
            text wraps.
          </label>
          <div class="answers">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, culpa?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
textarea {
  background-color: #f6f6f6;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  :focus {
    transition: all 0.5s ease-in-out;
    border-bottom: 2px solid #5fbae9;
  }
}

.contact {
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  &__form {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 7px;
    :focus {
      background-color: #fff;
      border-bottom: 2px solid #5fbae9;
    }
  }
  &__header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &-form {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    &-form-contact-us {
      text-align: center;
      margin: 0;
      line-height: 100px;
      color: #243141;
      font-size: 4rem;

      span {
        font-weight: bolder;
      }
    }
    &-phone-adress {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 200px;
    }
    &-info {
      h3 {
        color: #243141;
      }
      p {
        color: rgb(105, 71, 71);
      }
      ul {
        list-style: none;
      }
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }

  &__form-nameMail {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;
    color: black;
    border: none;

    input {
      font-weight: bold;
      width: 40%;
      height: 40px;
      border: none;
      font-size: 1rem;
      background-color: rgb(71, 68, 68);
      &::placeholder {
        color: rgb(204, 193, 193);
        margin-left: 20px;
      }
    }
  }

  &__form {
    margin-bottom: 30px;
  }
  &__form-message {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    textarea {
      color: black;
      font-weight: bold;
      width: 78%;
      height: 150px;
      border: none;
      font-size: 1.2rem;
      resize: none;
      border-radius: 7px;
      background-color: #f6f6f6;
      &::placeholder {
        color: rgb(204, 193, 193);
        font-size: 1rem;
        padding: 10px 10px;
      }
    }
  }
  &__form-btn {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  @include mq(tablet, max) {
    .contact {
      &__header {
        align-items: center;
        justify-content: center;

        &-phone-adress {
          gap: 0;
        }
        &-form {
          margin: 0;
          align-items: center;
          justify-content: center;
          &-contact-us {
            font-size: 2rem;
            margin: 0;
            padding: 0;
          }
        }
      }

      &__form {
        align-items: center;
        justify-content: center;
        &-btn {
          margin-bottom: 20px;
          margin-top: 0;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}

.faq {
  background-color: #eaecee;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 20px;
}
.content {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.faq-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}

/*Question*/
.question {
  position: relative;
  margin: 0;
  padding: 10px 10px 10px 50px;
  display: block;
  width: 100%;
  cursor: pointer;
}
/*Answer*/
.answers {
  padding: 0px 15px;
  margin: 5px 0;
  height: 0;
  overflow: hidden;
  color: red;
  position: relative;
  opacity: 0;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
}

.questions:checked ~ .answers {
  height: auto;
  opacity: 1;
  padding: 15px;
}

/*FAQ Toggle*/
.plus {
  position: absolute;
  margin-left: 10px;
  z-index: 5;
  font-size: 2em;
  line-height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
}

.questions:checked ~ .plus {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.questions {
  display: none;
}

.messageSent {
  color: rgb(25, 190, 25);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

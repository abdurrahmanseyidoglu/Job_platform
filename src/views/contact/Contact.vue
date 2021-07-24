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
            <input type="text" name="email" placeholder="الاسم" />
            <input type="text" name="name" placeholder="الايميل" />
          </div>
          <div class="contact__form-message">
            <textarea type="text" name="name" placeholder="رسالتك" />
          </div>
          <div class="contact__form-btn">
            <input type="submit" value="إرسال" />
          </div>
          <h2 class="messageSent"></h2>
        </form>
      </div>
    </div>

    <div class="faq">
      <h3 class="faq__title">الأسئلة الشائعة</h3>
      <ul class="faq__questions">
        <details>
          <summary>
            <li class="faq__question">
              Lorem ipsum dolor sit amet, consectetur adipisicing?
            </li>
          </summary>
          <li class="faq__answer">
            Dolore minima rerum dicta reiciendis, maiores tenetur nisi sint!
          </li>
        </details>
        <details>
          <summary>
            <li class="faq__question">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, provident?
            </li>
          </summary>
          <li class="faq__answer">
            quidem iusto labore dolorum quod consectetur dolore quaerat nam maxime!
          </li>
        </details>
        <details>
          <summary>
            <li class="faq__question">sapiente odit ex consequuntur iure a ducimus?</li>
          </summary>
          <li class="faq__answer">Illo aspernatur consequuntur fugit itaque.</li>
        </details>
        <details>
          <summary>
            <li class="faq__question">
              velit in magni consectetur totam qui quaerat, blanditiis optio eos,
              assumenda ipsam repellat?
            </li>
          </summary>
          <li class="faq__answer">aperiam saepe. Sunt, velit consequuntur.</li>
        </details>
        <details>
          <summary>
            <li class="faq__question">
              tempora explicabo est tenetur accusantium id reprehenderit?
            </li>
          </summary>
          <li class="faq__answer">
            Sed tempore ipsum quidem modi maxime culpa pariatur nemo labore.
          </li>
        </details>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.contact {
  margin: 0px 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  &__form {
    box-shadow: 0px 0px 12px 0px rgb(0, 140, 255);
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  color: white;
  details summary::marker {
    color: rgb(53, 52, 52);
  }
  &__title {
    margin: 0;
    color: rgb(53, 52, 52);
    font-weight: bold;
    font-size: 2rem;
    line-height: 30px;
  }

  &__questions {
    list-style: none;

    summary {
        border-radius: 7px;

      :hover {
        cursor: pointer;
      }
      ::marker {
        color: $blue;
      }
    }
    details summary {
      background-color: rgb(53, 52, 52);
      padding-bottom: 15px;
      padding-left: 10px;
      font-weight: bold;
      margin-top: 10px;
    }
  }
  &__answer {
    background-color: #eaecee;
    padding: 15px;
    margin-bottom: 10px;
    color: black;
  }
  @include mq(tablet, max) {
    margin: 0;
    &__questions {
      margin: 5px;
      padding: 0;
    }
  }
}

.messageSent {
  color: rgb(25, 190, 25);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

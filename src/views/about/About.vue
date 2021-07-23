<template>
  <div class="about">
    <img src="@/assets/images/logo.jpg" alt="logo" class="logo" />
    <div class="hero-section">
      <p class="title">الشركات العظيمة تصنع من أناس عظماء</p>
      <p class="about-paragraph">
        .نحن نؤمن بشدة أن الشركات العظيمة مصنوعة من قبل أشخاص عظماء <br />
        لهذا السبب نساعد آلاف الشركات في جذب وإدارة وتوظيف مواهبهم العظيمة التالية بطريقة
ذكية      </p>
    </div>
    <p class="about-us">
      منور هو السوق العربي الأول لعرض خدمات الشركات , يجمع منور بين الشركات العربية
      المستعدة لتقديم الخدمات، و بين فئة المشترين المستعدين لشراء هذه الخدمات، وبذلك يوفر
      فرصا مناسبة للشركات العربية وخدمات مميزة وبسعر اقتصادي للأفراد والشركات الناشئة.
      أطلق منور في أيلول 2021 بواسطة منور المنور
    </p>

    <p class="about-company">
      عن شركة المنورين تهدف منورين لتطوير العالم العربي عن طريق توفير حلول ومنتجات تساعد
      الشباب العرب على العمل والتطور. تركز منورين نشاطها على قطاع العمل الحر، ريادة
      الأعمال، التعليم الالكتروني، الإعلام، الترفيه والإعلان الرقمي وتتألف من فريق شاب
      وشغوف من مختلف الدول العربية يهدف تمكين الشباب العرب وفتح مزيدًا من الفرص أمامهم
    </p>
  </div>
</template>
<script></script>

<style lang="scss">
.about {
  background-color: #eaecee;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  margin: 50px;
  border-radius: 7px;
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 50px;
  }
  .hero-section {
    .title {
      font-weight: 600;
      font-size: 1.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .about-paragraph {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }
  }
}
</style>

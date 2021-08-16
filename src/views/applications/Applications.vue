<template>
  <div class="application">
    <Search />
    <div class="application__latest">
      <h1>أحدث الوظائف</h1>
    </div>
    <div v-if="loading">
      <Spinner />
    </div>
    <div class="application__card" v-for="item in applications">
      <img
        class="application__image"
        v-bind:src="item.image"
        alt="image"
        loading="lazy"
      />
      <hr style="width: 100%; text-align: left; margin-left: 0" />
      <div class="application__title">
        <span> {{ item.name }} </span> <i class="far fa-suitcase"></i>
      </div>
      <div class="application__company">
        <span class="job-company"> {{ item.companyName }} </span> : الشركة
      </div>
      <div class="application__location">
        {{ item.location }} <i class="fas fa-map-marker-alt"></i>
      </div>
      <div class="application__email">
        {{ item.contact }} <i class="fas fa-envelope"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
import Search from "./Search.vue";
import axios from "axios";
import env from "../../env";

export default {
  components: { Spinner, Search },
  data() {
    loading: false;
    return {
      applications: [],
    };
  },
  methods: {
    async apiFetch() {
      this.loading = true;
      console.log(this.loading);
      await axios
        .post(`${env.api_url}post/getall`)
        .then((res) => {
          this.applications = res.data;
          this.loading = false;
          console.log(res.data[0].image);
        })

        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  beforeMount() {
    this.apiFetch();
  },
};
</script>

<style lang="scss" scoped>
.application {
  margin: 50px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  background-color: #eaecee;
  border-radius: 7px;
  &__latest {
    width: 100%;
    text-align: center;
  }
  &__card {
    display: flex;
    flex-flow: column wrap;
    width: 300px;
    border-radius: 7px;
    padding: 20px;
    margin: 20px;
    background-color: white;
    text-align: right;
    cursor: pointer;
    box-shadow: rgba(42, 81, 131, 0.19) 0px 10px 20px,
      rgba(5, 5, 5, 0.23) 0px 6px 6px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.322) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  }
  &__title {
    span {
      font-size: 1.1rem;
      font-weight: bold;
    }
    i {
      color: $blue;
    }
  }
  &__location {
    i {
      color: #e02707c2;
    }
  }
  &__email {
    i {
      color: #3dc0de;
    }
  }
  &__image {
    width:100%;
  }
}
</style>
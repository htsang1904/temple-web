<template>
    <div class="hamburger-menu h-screen	bg-thienquang-yellow overflow-y-scroll">
      <div class="px-5 py-10 pb-[100px] h-[fit-content]">
        <ul>
          <li class="burger-link" >
            <nuxt-link to="/cua-hang">Giới thiệu</nuxt-link>
          </li>
          <li class="burger-link" >
            <nuxt-link to="/thuc-don">Tin tức</nuxt-link>
          </li>
          <li class="burger-link" >
            <nuxt-link to="/blog">Cửa hàng</nuxt-link>
          </li>
          <li class="burger-link" >
            <nuxt-link to="/cau-chuyen">Hoạt động</nuxt-link>
          </li>
          <li class="burger-link" >
            <nuxt-link to="/dat-ban">Pháp âm</nuxt-link>
          </li>
          <li class="burger-link" >
            <nuxt-link to="/lien-he">Phụng sự viên</nuxt-link>
          </li>
          <li class="burger-link" >
            <nuxt-link to="/lien-he">Liên hệ</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="burger-link login" >
        <nuxt-link class="bg-thienquang-purple p-[10px] rounded-[10px] text-white w-[50%] mx-[10px] text-center" to="/lien-he">Đăng nhập</nuxt-link>
        <nuxt-link class="bg-thienquang-purple p-[10px] rounded-[10px] text-white w-[50%] mx-[10px] text-center" to="/lien-he">Đăng ký</nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  // import type { PropType } from 'vue'
  import Vue from 'vue'
  
  export default {
    name: "HamburgerMenu",
    methods: {
      close() {
        this.$emit('close')
      },
    },
  }
  </script>
  <style lang="scss" scoped>
  .burger-link {
      @apply py-2 font-bold text-[20px];
      position: relative;
  }
  .login {
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 70px;
  }
  </style>
  
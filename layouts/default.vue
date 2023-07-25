<template>
  <div class="default-layout">
    <div class="transition-all pt-[14px] top-header relative bg-no-repeat bg-cover bg-center lg:h-[140px] md:h-[120px] sm:h-[90px] h-[80px]">
            <div class="wrapper">
                <nuxt-link to="/">
                    <img class="transition-all h-[40px] w-[40px] sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] lg:h-[70px] lg:w-[70px]" src="../static/logo.png" alt="">
                </nuxt-link>
                <div class="p-[4px] text-[12px] font-[400] md:text-[16px] lg:text-[18px] text-thienquang-purple ">
                    Tân Hòa - Dĩ An - Bình Dương
                </div>
            </div>
        </div>
    <MainNavbar
        v-if="!isHiddenHeader"
        ref="header"
        :is-menu-showing="isShowMenu"
        :is-search-bar-showing="isShowSearchBar"
        :is-fixed="isFixed"
        :is-more-menu-showing="!isShowSearchBar"
        :class="{'fixed top-0': isFixed, 'relative': !isFixed}"
        class="w-full z-20"
        @open-menu="openMenu"
        @close-menu="menuClose"
        @open-search-bar="openSearchBar"
        @close-search-bar="closeSearchBar"
    />

    <transition name="custom" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" :duration="200">
        <FixedSearchBar v-if="isShowSearchBar" 
        class=" w-full z-[1] border-t border-thienquang-yellow shadow-md" 
        :class="{'fixed top-[50px]': isFixed, 'absolute md:top-[170px] lg:top-[192px]': !isFixed}"
        @close="closeSearchBar" />
    </transition>
    <div v-if="!isShowMenu" class="min-h-full">
        <Nuxt />
        <MainFooter v-if="!isHiddenFooter" />
    </div>
    <HamburgerMenu v-if="isShowMenu" class="fixed inset-0 z-30 top-[50px]" />
  </div>
</template>
<script>
import MainNavbar from '~/components/MainNavbar.vue'
import MainFooter from '~/components/MainFooter.vue'
import HamburgerMenu from "~/components/HamburgerMenu.vue";
import FixedSearchBar from "~/components/FixedSearchBar.vue";
export default {
    name: 'DefaultLayout',
    components: {
        FixedSearchBar,
        HamburgerMenu,
        MainFooter,
        MainNavbar,
    },
    data() {
        return {
            isFixed: false,
            isShowMenu: false,
            isShowSearchBar: false,
            scrollTop: 0,
            isHiddenFooter: false,
            isHiddenHeader: false
        }
    },
    mounted() {
        this.checkHideHeaderAndFooter()
        this.handleScroll()
    },
    computed: {
    },
    methods: {
        openMenu() {
            this.scrollTop = document.documentElement.scrollTop
            this.isShowMenu = true
            this.isShowSearchBar = false
            this.isFixed = true
        },
        menuClose() {
            this.isShowMenu = false
            this.isFixed = false
            if (this.scrollTop) {
                this.$nextTick(() => {
                    document.documentElement.scrollTop = this.scrollTop
                })
            }
        },
        openSearchBar() {
            this.isShowSearchBar = true
        },
        closeSearchBar() {
            this.isShowSearchBar = false
        },
        checkHideHeaderAndFooter() {
            if (this.$route.query && this.$route.query.nobar) {
                this.isHiddenHeader = true
                this.isHiddenFooter = true
            } else if (this.$route.name === 'stores') {
                this.isHiddenFooter = true
                this.isHiddenHeader = false
            } else {
                this.isHiddenHeader = false
                this.isHiddenFooter = false
            }
        },
        handleScroll() {
            let offsetHeader = this.$refs.header.$el.offsetTop
            if(!this.isShowMenu) {
                window.document.onscroll = () => {
                    if(window.scrollY > offsetHeader){
                            this.isFixed = true
                            this.isShowSearchBar = false
                        } else {
                            this.isFixed = false
                    }
                }
            }
        }
    },
    watch: {
        $route() {
            this.scrollTop = 0;
            this.menuClose()
            this.checkHideHeaderAndFooter()
        },

    },
}
</script>
<style lang="scss" scoped>
.top-header {
    background-image: url('../static/background/bg-header.jpg');
}

</style>
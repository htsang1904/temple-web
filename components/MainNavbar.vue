<template>
    <div>
        <nav class="transition-all text-white shadow-md main-navbar h-[50px] bg-[#3d1d32] shadow-[#3d1d32] lg:top-[140px] md:top-[120px] sm:top-[90px] top-[80px]">
            <div class="px-5 h-full md:wrapper flex justify-between items-center">
                <div class="w-1/2">
                    <div class="burger-icon md:hidden" :class="{open: isMenuShowing}" @click="handleMenuBarAction">
                      <i></i><i></i><i></i>
                    </div>
                    <div class="hidden md:block">
                        <nuxt-link class="text-link" active-class="active" to="/">
                            <svg class="inline-block" fill="#ffffff" version="1.1" id="Capa_1" 
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" 
	                            width="20px" height="20px" viewBox="0 0 495.398 495.398"
	                            xml:space="preserve">
                            <g>
                                <g>
                                    <g>
                                        <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                                            v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                                            c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                                            c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
                                        <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                                            c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                                            c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
                                    </g>
                                </g>
                            </g>
                            </svg>
                        </nuxt-link>
                        <nuxt-link class="text-link" active-class="active" to="/a">Giới thiệu</nuxt-link>
                        <nuxt-link class="text-link" active-class="active" to="/b">Tin tức</nuxt-link>
                        <a class="text-link more-link" @click="handleMoreMenu">
                            <span>Thêm</span>
                            <div class="arrow-icon" :class="{open: isShowIntroductionMenu}">
                                <span class="left-bar"></span>
                                <span class="right-bar"></span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="flex justify-end w-1/2">
                    <nuxt-link class="hidden md:block text-link" active-class="active" to="/c">Đăng nhập</nuxt-link>
                    <nuxt-link class="hidden md:block text-link" active-class="active" to="/s">Đăng ký</nuxt-link>
                    <a class="search-icon md:mt-[10px] md:mr-[10px] ml-[10px]" ref="searchIcon" :class="{open: isSearchBarShowing}" @click="handleSearchBarAction">
                        <span class="circle"></span>
                        <span class="handle"></span>
                    </a>
                </div>
            </div>
            <transition name="custom" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" :duration="200">
                <div v-if="isShowIntroductionMenu" 
                    class="w-full z-[-10] top-[50px] left-0 border-t border-thienquang-yellow"
                    :class="{'fixed': isFixed, 'absolute': !isFixed}"
                    >
                    <div class="more-menu-desktop bg-thienquang-yellow shadow-md shadow-warmGray-200">
                        <div class="pt-[10px] pb-[12px] wrapper">
                            <!-- <nuxt-link @click.native="handleMoreMenu" class="text-link" to="/">Cửa hàng</nuxt-link> -->
                            <nuxt-link @click.native="handleMoreMenu" class="text-link" to="/">Hoạt Động</nuxt-link>
                            <nuxt-link @click.native="handleMoreMenu" class="text-link" to="/">Pháp âm</nuxt-link>
                            <nuxt-link @click.native="handleMoreMenu" class="text-link" to="/">Phụng sự viên</nuxt-link>
                            <nuxt-link @click.native="handleMoreMenu" class="text-link" to="/">Liên hệ</nuxt-link>
                        </div>
                    </div>
                </div>

            </transition>
        </nav>
    </div>
    </template>

    <script>
    import 'animate.css';

    export default {
        name: 'MainNavbar',
        components: {

        },
        props: {
            isMenuShowing: {
                type: Boolean,
                required: false,
                default: false
            },
            isFixed: {
                type: Boolean,
                required: false,
                default: false
            },
            isSearchBarShowing: {
                type: Boolean,
                required: false,
                default: false
            },

        },
        data() {
            return {
                isShowIntroductionMenu: false
            }
        },
        methods: {
            handleMenuBarAction() {
                const eventName = this.isMenuShowing ? 'close-menu' : 'open-menu'
                this.$emit(eventName)
            },
            handleSearchBarAction() {
                const eventName = this.isSearchBarShowing ? 'close-search-bar' : 'open-search-bar'
                this.isShowIntroductionMenu = false
                this.$emit(eventName)
            },
            handleMoreMenu() {
                this.isShowIntroductionMenu = !this.isShowIntroductionMenu
                if(this.isShowIntroductionMenu == true) {
                    this.$emit('close-search-bar')
                }
            }
        },
        watch: {
        }
    }
    </script>

    <style lang="scss" scoped>
    $easing: cubic-bezier(.25, 1.7, .35, .8);
    $duration: 0.6s;
    .burger-icon {
        cursor: pointer;
        width: 30px;
        height: 20px;
        i {
            background-color: #fff;
            border-radius: 2px;
            content: '';
            display: block;
            width: 100%;
            height: 3px;
        }

        i:nth-child(1) {
            -webkit-animation: outT $duration backwards;
            animation: outT $duration backwards;
            -webkit-animation-direction: reverse;
            animation-direction: reverse;
        }

        i:nth-child(2) {
            margin: 5px 0;
            -webkit-animation: outM $duration backwards;
            animation: outM $duration backwards;
            -webkit-animation-direction: reverse;
            animation-direction: reverse;
        }

        i:nth-child(3) {
            -webkit-animation: outBtm $duration backwards;
            animation: outBtm $duration backwards;
            -webkit-animation-direction: reverse;
            animation-direction: reverse;
        }

        &.open {
            i:nth-child(1) {
                -webkit-animation: inT $duration forwards;
                animation: inT $duration forwards;
            }

            i:nth-child(2) {
                -webkit-animation: inM $duration forwards;
                animation: inM $duration forwards;
            }

            i:nth-child(3) {
                -webkit-animation: inBtm $duration forwards;
                animation: inBtm $duration forwards;
            }
        }
    }
    .text-link {
        @apply py-2 px-2 font-[500] text-[14px] tracking-[0.02em];
        transition: 0.3s;
        &:hover,
        &:active,
        &.active {
            color: #fd8f8f;
        }

        &.more-link {
            cursor: pointer;
            span {
                margin-right: 0px;
            }

            .arrow-icon {
                background-color: black;
                display: inline-block;
                position: relative;
                cursor: pointer;
                border-radius: 2px;
                margin: 0;
                padding: 0;
                height: 6px;
            }

            .left-bar {
                position: absolute;
                background-color: transparent;
                top: 0;
                left: 0;
                width: 10px;
                height: 3px;
                display: block;
                transform: rotate(35deg);
                float: right;
                border-radius: 4px;

                &:after {
                    content: "";
                    background-color: white;
                    width: 10px;
                    height: 3px;
                    display: block;
                    float: right;
                    border-radius: 2px 3px 3px 2px;
                    transition: all $duration $easing;
                    z-index: -1;
                }
            }

            .right-bar {
                position: absolute;
                background-color: transparent;
                top: 0px;
                left: 7px;
                width: 10px;
                height: 3px;
                display: block;
                transform: rotate(-35deg);
                float: right;
                border-radius: 2px;

                &:after {
                    content: "";
                    background-color: white;
                    width: 10px;
                    height: 3px;
                    display: block;
                    float: right;
                    border-radius: 10px 6px 6px 10px;
                    transition: all $duration $easing;
                    z-index: -1;
                }
            }

            .open {
                .left-bar:after {
                    transform-origin: center center;
                    transform: rotate(-70deg);
                }

                .right-bar:after {
                    transform-origin: center center;
                    transform: rotate(70deg);
                }

            }

        }

    }

    .search-icon {
        height: 25px;
        width: 30px;
        display: block;
        padding: 0;
        position: relative;
        cursor: pointer;
        border-radius: 4px;

        .circle {
            @apply bg-[#3d1d32];
            position: relative;
            display: block;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            z-index: 0;
            border: 3px solid white;
            transition: all 0.6s cubic-bezier(0.25, 1.7, 0.35, 0.8);
            z-index: 1;
        }

        .handle {
            position: absolute;
            background-color: white;
            top: 13px;
            left: -2px;
            width: 30px;
            height: 3px;
            display: block;
            transform: rotate(45deg);
            float: right;
            border-radius: 2px;

            &:after {
                content: "";
                background-color: white;
                width: 30px;
                height: 3px;
                display: block;
                float: right;
                border-radius: 2px;
                transition: all $duration $easing;
                z-index: -1;
            }
        }

        &.open {
            .circle {
                transform: scale(.02);
                transform-origin: 30% 40%;
                background: white;
                border-color: white;
            }

            .handle:after {
                transform-origin: center center;
                transform: rotate(90deg);
            }
        }
    }

    .more-menu-desktop {
        .text-link {
            color: #fd8f8f;

            &:hover,
            &:active {
                color: #FF6161;
            }
        }
    }

    @-webkit-keyframes inM {
        50% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(45deg);
        }
    }

    @keyframes inM {
        50% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(45deg);
        }
    }

    @-webkit-keyframes outM {
        50% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(45deg);
        }
    }

    @keyframes outM {
        50% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(45deg);
        }
    }

    @-webkit-keyframes inT {
        0% {
            -webkit-transform: translateY(0px) rotate(0deg);
        }

        50% {
            -webkit-transform: translateY(8px) rotate(0deg);
        }

        100% {
            -webkit-transform: translateY(8px) rotate(135deg);
        }
    }

    @keyframes inT {
        0% {
            transform: translateY(0px) rotate(0deg);
        }

        50% {
            transform: translateY(8px) rotate(0deg);
        }

        100% {
            transform: translateY(8px) rotate(135deg);
        }
    }

    @-webkit-keyframes outT {
        0% {
            -webkit-transform: translateY(0px) rotate(0deg);
        }

        50% {
            -webkit-transform: translateY(8px) rotate(0deg);
        }

        100% {
            -webkit-transform: translateY(8px) rotate(135deg);
        }
    }

    @keyframes outT {
        0% {
            transform: translateY(0px) rotate(0deg);
        }

        50% {
            transform: translateY(8px) rotate(0deg);
        }

        100% {
            transform: translateY(8px) rotate(135deg);
        }
    }

    @-webkit-keyframes inBtm {
        0% {
            -webkit-transform: translateY(0px) rotate(0deg);
        }

        50% {
            -webkit-transform: translateY(-8px) rotate(0deg);
        }

        100% {
            -webkit-transform: translateY(-8px) rotate(135deg);
        }
    }

    @keyframes inBtm {
        0% {
            transform: translateY(0px) rotate(0deg);
        }

        50% {
            transform: translateY(-8px) rotate(0deg);
        }

        100% {
            transform: translateY(-8px) rotate(135deg);
        }
    }

    @-webkit-keyframes outBtm {
        0% {
            -webkit-transform: translateY(0px) rotate(0deg);
        }

        50% {
            -webkit-transform: translateY(-8px) rotate(0deg);
        }

        100% {
            -webkit-transform: translateY(-8px) rotate(135deg);
        }
    }

    @keyframes outBtm {
        0% {
            transform: translateY(0px) rotate(0deg);
        }

        50% {
            transform: translateY(-8px) rotate(0deg);
        }

        100% {
            transform: translateY(-8px) rotate(135deg);
        }
    }
    </style>
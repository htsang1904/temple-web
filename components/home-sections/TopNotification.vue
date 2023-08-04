<template>
    <section id="top-notification" class="w-full min-h-[500px] bg-thienquang-light-yellow">
        <div class="wrapper">
            <div class="w-full flex flex-col md:flex-row justify-around items-center">
                <div class="w-full md:w-2/3 h-[400px]">
                    <div class="h-[50px] w-full text-thienquang-purple flex flex-row items-center p-[4px]">
                        <img class="w-[34px] h-[24px] inline-block" src="../../static/pagoda-icon.png" alt="">
                        <div class="font-[700] text-[16px] inline-block mx-[4px] w-[100px] lg:w-[74px]">PHẬT SỰ</div>
                        <div class="border-b border-thienquang-purple max-w-[680px] w-[90%] text-right mb-[10px]">
                            <a class="text-[14px] font-[500] pb-[2px] hover:text-thienquang-dark-purple hover:font-[600] cursor-pointer">Xem tất cả</a>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 h-[400px] bg-white m-[10px] rounded-[10px]">

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BlackWhiteButton from '../common/BlackWhiteButton.vue';
export default {
    name: 'TopVideoNews',
    components: {
        BlackWhiteButton,
    },
    data() {
        return {
            selectedVideo: 0,
            listVideo: [
                {
                    title: 'Lễ Cúng Dường Trai Tăng tại chùa Thiên Quang (Bình Dương)',
                    img: '~../../static/intro/intro3.jpg',
                    videoSrc: 'fDCrGNDOzGY'
                },
                {
                    title: 'NIỆM PHẬT NHƯ NÀO ĐỂ CÓ LỢI ÍCH ? NI SƯ HƯƠNG NHŨ thuyết giảng',
                    img: '../../static/intro/intro3.jpg',
                    videoSrc: 'gxIicaG-5GA'
                },
                {
                    title: 'Pháp thoại CHỊU THIỆT LÀ PHÚC - NI SƯ HƯƠNG NHŨ thuyết giảng (rất hay)',
                    img: '../../static/intro/intro3.jpg',
                    videoSrc: 'y-T_ull0lyU'
                },
                {
                    title: '1',
                    img: '../../static/intro/intro3.jpg',
                    videoSrc: 'fDCrGNDOzGY'
                },
                {
                    title: '1',
                    img: '../../static/intro/intro3.jpg',
                    videoSrc: 'fDCrGNDOzGY'
                },
            ]
        };
    },

    mounted() {
        
    },
    computed: {
        currentVideo() {
            return this.listVideo[this.selectedVideo]
        }
    },
    methods: {
        handleSelected(index) {
            this.selectedVideo = index
        }
    },
};
</script>

<style lang="scss" scoped>
.list-video::-webkit-scrollbar {
    display: none;
}
.list-video {
    -ms-overflow-style: none;
    scrollbar-width: none;
    .item {
        .image::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 400;
            transform: scale(0.5);
            background-color: #3d1d32;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease-out;
        }
        &:hover .image::after {
            transform: scale(1);
            opacity: 0.6;
        }
        &:hover .title {
            color: #773C62;
            transition: all 0.3s ease-out;
        }
    }
}
@media (max-width: 768px) {
    .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.video-wrapper .video-youtube {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
}
</style>
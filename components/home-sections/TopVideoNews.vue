<template>
    <section id="top-video-section" class="w-full min-h-[500px] bg-thienquang-yellow">
        <div class="wrapper">
            <div class="pt-[10px] w-full text-thienquang-purple flex flex-col justify-center items-center">
                <div class="font-[500] text-[20px]">BẢN TIN</div>
                <img class="w-[80px] h-[20px]" src="../../static/background/icon-divider.png" alt="">
            </div>
            <div class="flex flex-col md:flex-row justify-around min-h-[480px]">
                <div class="w-full md:w-2/3 md:m-[10px]">
                    <div class="lg:h-[530px] md:h-[400px] video-wrapper">
                        <iframe class="rounded-[4px] video-youtube" height="100%" width="100%" frameborder="0" allowfullscreen
                        :src="'//www.youtube.com/embed/'+ currentVideo.videoSrc">
                        </iframe>
                    </div>
                    <div class="title pt-[10px] pb-[10px] font-[700] text-[16px] text-thienquang-dark-purple">
                        {{ currentVideo.title }}
                    </div>
                </div>
                <div class="md:w-1/3 md:m-[10px] md:h-[450px] lg:h-[590px]" >
                    <div class="list-video overflow-y-scroll h-[90%]">
                        <div v-for="(video, index) in listVideo" :key="index"
                            class="item w-full h-[100px] lg:h-[100px] md:h-[80px] bg-white mb-[10px] flex flex-row shadow-lg shadow-thienquang-yellow overflow-hidden cursor-pointer"
                            @click="handleSelected(index)">
                            <div class="image w-1/3 mr-[10px] h-full bg-thienquang-dark-purple overflow-hidden relative bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url('${video.img}')`}">
                            </div>
                            <div class="w-2/3 h-full p-[10px]">
                                <div class="title font-[500] text-[13px] text-thienquang-dark-purple">
                                    {{ video.title }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-[10px] font-[600]">
                        <a href="https://www.youtube.com/@ChuaThienQuang">
                            Xem phiên bản HD trên 
                            <img class="h-[18px] inline-block" src="../../static/icon-youtube.png" alt="">
                        </a>    
                    </div>
                </div>
            </div>
            <div class=" w-full flex flex-col justify-center items-center">
                <BlackWhiteButton button-name="Xem tất cả"/>
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
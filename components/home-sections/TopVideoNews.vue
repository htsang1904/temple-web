<template>
    <section id="top-video-section" class="w-full min-h-[500px] bg-thienquang-yellow">
        <div class="wrapper">
            <div class="pt-[10px] w-full text-thienquang-purple flex flex-col justify-center items-center">
                <div class="font-[500] text-[20px]">BẢNG TIN</div>
                <img class="w-[80px] h-[20px]" src="../../static/background/icon-divider.png" alt="">
            </div>
            <div class="flex flex-row justify-between h-[450px]">
                <div class="w-2/3 m-[10px]">
                    <iframe width="100%" height="90%" frameborder="0" allowfullscreen
                    :src="'//www.youtube.com/embed/'+ src">
                    </iframe>
                    <div class="title pt-[10px] font-[700] text-[20px] text-thienquang-dark-purple">
                        Lễ cúng dường trai tăng tại chùa Thiên Quang(Bình Dương)
                    </div>
                </div>
                <div class="w-1/3 m-[10px]" >
                    <div class="list-video overflow-y-scroll h-[90%]">
                        <div v-for="(video, index) in listVideo" :key="index" class="w-full h-[100px] bg-white mb-[10px] flex flex-row">
                            <div class="w-1/3 mr-[10px] h-full bg-thienquang-dark-purple overflow-hidden">
                                <img class="h-full w-full" src="../../static/intro/intro3.jpg" alt="">
                            </div>
                            <div class="w-2/3 h-full p-[10px]">
                                <div> aaaaaaaaa</div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-[10px]">
                        <a href="https://www.youtube.com/@ChuaThienQuang">
                            Xem phiên bản HD trên 
                            <img class="h-[18px] inline-block" src="../../static/icon-youtube.png" alt="">
                        </a>    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TopVideoNews',
    components: {
    },
    data() {
        return {
            src: 'fDCrGNDOzGY',
            listVideo: [
                {
                    title: '1',
                    img: '',
                    videoSrc: 'fDCrGNDOzGY'
                },
                {
                    title: '1',
                    img: '',
                    videoSrc: 'fDCrGNDOzGY'
                },{
                    title: '1',
                    img: '',
                    videoSrc: 'fDCrGNDOzGY'
                },{
                    title: '1',
                    img: '',
                    videoSrc: 'fDCrGNDOzGY'
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
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
}
</style>
<template>
    <section id="top-news-section" class="w-full h-[500px] bg-thienquang-light-yellow">
        <div class="wrapper">
            <div class="pt-[10px] w-full text-thienquang-purple flex flex-col justify-center items-center">
                <div class="font-[500] text-[20px]">TIN MỚI</div>
                <img class="w-[80px] h-[20px]" src="../../static/background/icon-divider.png" alt="">
            </div>
            <flicking ref="newsFlicking" class="w-full !h-[420px] z-[0]" :plugins="plugins" :options="sliderOptions" key="newsSlider">
                <div class="slider-card rounded-[8px] w-[50px] bg-white m-[18px] overflow-hidden !flex !flex-col !justify-between shadow-lg shadow-thienquang-yellow">
                    <img class="w-full h-[60%]" src="../../static/news/new2.jpg" alt="">
                    <div class="w-full h-[40%] p-[10px]">
                         <div class="font-[700] text-thienquang-dark-purple">
                            Chùa Thiên Quang tiếp tục hỗ trợ người dân khó khăn trong mùa dịch Covid tại Bình Dương
                        </div>
                        <div class="text-thienquang-purple pt-[4px] text-[12px]">
                            04/11/2018
                        </div>
                        <div class="description text-thienquang-dark-purple">
                            Trong tình hình dịch bệnh diễn ra nghiêm trọng, Quỹ Từ thiện Chùa Thiên Quang (Dĩ An, Bình Dương) do Ni sư Thích nữ Hương Nhũ trụ trì đã hỗ trợ trang thiết bị y tế đến các bệnh viện dã chiến, khu cách ly dành cho bệnh nhân nhiễm Covid-19.
                        </div>
                    </div>
                </div>
                <div class="slider-card rounded-[8px] w-[50px] bg-white m-[18px] overflow-hidden !flex !flex-col !justify-between shadow-lg shadow-thienquang-yellow">
                    <img class="w-full h-[60%]" src="../../static/news/new2.jpg" alt="">
                    <div class="w-full h-[40%] p-[10px]">
                         <div class="font-[700] text-thienquang-dark-purple">
                            Chùa Thiên Quang tiếp tục hỗ trợ người dân khó khăn trong mùa dịch Covid tại Bình Dương
                        </div>
                        <div class="text-thienquang-purple pt-[4px] text-[12px]">
                            04/11/2018
                        </div>
                        <div class="description text-thienquang-dark-purple">
                            Trong tình hình dịch bệnh diễn ra nghiêm trọng, Quỹ Từ thiện Chùa Thiên Quang (Dĩ An, Bình Dương) do Ni sư Thích nữ Hương Nhũ trụ trì đã hỗ trợ trang thiết bị y tế đến các bệnh viện dã chiến, khu cách ly dành cho bệnh nhân nhiễm Covid-19.
                        </div>
                    </div>
                </div>
                <div class="slider-card rounded-[8px] w-[50px] bg-white m-[18px] overflow-hidden !flex !flex-col !justify-between shadow-lg shadow-thienquang-yellow">
                    <img class="w-full h-[60%]" src="../../static/news/new2.jpg" alt="">
                    <div class="w-full h-[40%] p-[10px]">
                         <div class="font-[700] text-thienquang-dark-purple">
                            Chùa Thiên Quang tiếp tục hỗ trợ người dân khó khăn trong mùa dịch Covid tại Bình Dương
                        </div>
                        <div class="text-thienquang-purple pt-[4px] text-[12px]">
                            04/11/2018
                        </div>
                        <div class="description text-thienquang-dark-purple">
                            Trong tình hình dịch bệnh diễn ra nghiêm trọng, Quỹ Từ thiện Chùa Thiên Quang (Dĩ An, Bình Dương) do Ni sư Thích nữ Hương Nhũ trụ trì đã hỗ trợ trang thiết bị y tế đến các bệnh viện dã chiến, khu cách ly dành cho bệnh nhân nhiễm Covid-19.
                        </div>
                    </div>
                </div>
                <div class="slider-card rounded-[8px] w-[50px] bg-white m-[18px] overflow-hidden !flex !flex-col !justify-between shadow-lg shadow-thienquang-yellow">
                    <img class="w-full h-[60%]" src="../../static/news/new2.jpg" alt="">
                    <div class="w-full h-[40%] p-[10px]">
                         <div class="font-[700] text-thienquang-dark-purple">
                            Chùa Thiên Quang tiếp tục hỗ trợ người dân khó khăn trong mùa dịch Covid tại Bình Dương
                        </div>
                        <div class="text-thienquang-purple pt-[4px] text-[12px]">
                            04/11/2018
                        </div>
                        <div class="description text-thienquang-dark-purple">
                            Trong tình hình dịch bệnh diễn ra nghiêm trọng, Quỹ Từ thiện Chùa Thiên Quang (Dĩ An, Bình Dương) do Ni sư Thích nữ Hương Nhũ trụ trì đã hỗ trợ trang thiết bị y tế đến các bệnh viện dã chiến, khu cách ly dành cho bệnh nhân nhiễm Covid-19.
                        </div>
                    </div>
                </div>
                <span slot="viewport" class="arrow flicking-arrow-prev is-circle"></span>   
                <span slot="viewport" class="arrow flicking-arrow-next is-circle"></span>
            </flicking>
        </div>
    </section>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
import "@egjs/vue-flicking/dist/flicking-inline.css";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
export default {
    name: 'TopNewsSection',
    components: {
        Flicking: Flicking
    },
    data() {
        return {
            plugins: [
                new Arrow(),
                
            ],
            sliderOptions: {
                panelsPerView: 3,
                align: 'center',
                circular: true,
                defaultIndex: 1,
                inputType: ["pointer"],
                adaptive: true,
                duration: 300,
                height: 400,
            },
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.arrow {
    background-color: #FFC08D;
    opacity: 0.6;
    transition: all .2s linear;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
}
.description {
    padding-top: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
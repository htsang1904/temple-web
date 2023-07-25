<template>
    <section id="top-header-section" class="w-full lg:h-[500px]">
        <flicking ref="topFlicking" class="top-slider z-[0]" :plugins="plugins" :options="sliderOptions" key="header-slide" @changed="slideChange()">
            <div class="flicking-panel" v-for="(slider, index) in topSilers" :key="index">
                <img class="object-center object-cover h-[500px] w-full" src="../../static/slider/slider1.jpg" alt="">
                <div class="overlay-slider tracking-wider font-[700] text-[14px] lg:text-[20px] md:text-[18px] sm:[14px] ">
                    <div :ref="'content'+ index" class="content">"{{slider.content}}"</div>
                </div>
            </div>
            <div slot="viewport" class="flicking-pagination"></div>
            <span slot="viewport" class="arrow hidden sm:block flicking-arrow-prev is-circle"></span>
            <span slot="viewport" class="arrow hidden sm:block flicking-arrow-next is-circle"></span>
        </flicking>
    </section>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
import "@egjs/vue-flicking/dist/flicking-inline.css";
import { AutoPlay, Fade } from "@egjs/flicking-plugins";
import { Pagination, Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";
export default {
    name: 'TopHeaderSection',
    components: {
        Flicking: Flicking
    },
    data() {
        return {
            plugins: [
                new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false }),
                new Pagination({ type: 'bullet' }),
                new Arrow()
                
            ],
            sliderOptions: {
                panelsPerView: 1,
                align: 'center',
                circular: true,
                defaultIndex: 0,
                inputType: ["pointer"],
                adaptive: true,
                duration: 1400
            },
            topSilers: [
                {content: "Thuận duyên và khỏe mạnh cũng khiến người chìm đấm mãi trong các pháp trần. Vậy nên đau ốm bệnh tật cũng là cái duyên để ta tỉnh thức"},
                {content: "Thuận duyên và khỏe mạnh cũng khiến người chìm đấm mãi trong các pháp trần. Vậy nên đau ốm bệnh tật cũng là cái duyên để ta tỉnh thức"},
                {content: "Thuận duyên và khỏe mạnh cũng khiến người chìm đấm mãi trong các pháp trần. Vậy nên đau ốm bệnh tật cũng là cái duyên để ta tỉnh thức"},
                {content: "Thuận duyên và khỏe mạnh cũng khiến người chìm đấm mãi trong các pháp trần. Vậy nên đau ốm bệnh tật cũng là cái duyên để ta tỉnh thức"},
                {content: "Thuận duyên và khỏe mạnh cũng khiến người chìm đấm mãi trong các pháp trần. Vậy nên đau ốm bệnh tật cũng là cái duyên để ta tỉnh thức"},
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        slideChange(e) {
            let index = this.$refs.topFlicking.index
            this.$refs['content' + index][0].style.opacity = '1'
            this.$refs['content' + index][0].style.transform = 'scale(1)'
            setTimeout(()=> {
                this.$refs['content' + index][0].style.opacity = '0'
                this.$refs['content' + index][0].style.transform = 'scale(0.5)'
            },3500)
        }
    },
};
</script>

<style lang="scss" >
#top-header-section {
    background-color: #8c4e5d;
    background-image: linear-gradient(180deg, #49263d 10%, rgba(73,38,61,0) 90%);
    display: flex;
    justify-content: center;
    .top-slider {
        max-width: 1280px;
        height: 100%;
        .flicking-panel {
            position: relative;
            .overlay-slider {
                position: absolute;
                width: 100%;
                height: 30%;
                bottom: 0;
                background-image: linear-gradient(to top, #4F2F43 1%, rgba(90, 46, 74, 0) 100%);
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                .content {
                    max-width: 800px;
                    width: 90%;
                    text-align: center;
                    opacity: 0;
                    transform: scale(0.5);
                    transition: all 1.4s;
                }
            }
        }
        .flicking-pagination {
            .flicking-pagination-bullet {
                background-color: #ffefe2;
                width: 18px;
                height: 8px;
                margin: 8px;
                border-radius: 3px;
            }
            .flicking-pagination-bullet-active {
                background-color: #F69C48;
                transform: scale(1.5);
            }
        }
        .arrow {
            background-color: #49263d;
            opacity: 0.8;
            transition: all .2s linear;
            &:hover {
                opacity: 1;
            }
        }
    }

}
</style>
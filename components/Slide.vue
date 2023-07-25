<template>
    <section class="slide">
        <flicking ref="topFlicking" class="slide-container z-[0]" :plugins="plugins" :options="sliderOptions" key="slider">
            <div class="flicking-panel" v-for="(slider, index) in topSilers" :key="index">
                <img class="object-center object-cover h-full w-full" src="../static/intro/intro1.jpg" alt="">
            </div>
            <div slot="viewport" class="flicking-pagination"></div>
        </flicking>
    </section>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
import "@egjs/vue-flicking/dist/flicking-inline.css";
import { AutoPlay, Fade } from "@egjs/flicking-plugins";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";
export default {
    name: 'TopHeaderSection',
    props: {
       
    },
    components: {
        Flicking: Flicking
    },
    computed: {
    },
    data() {
        return {
            plugins: [
                new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false }),
                new Pagination({ type: 'bullet'}),
                
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
                {src: 'intro1.jpg'},
                {src: 'intro2.jpg'},
                {src: 'intro3.jpg'},
                {src: 'intro4.jpg'}
            ]
        };
    },
    mounted() {
    },

    methods: {
    },
};
</script>

<style lang="scss">
.slide {
    display: flex;
    justify-content: center;
    .slide-container {
        max-width: 360px;
        height: 400px;
        border-radius: 10px;
        .flicking-pagination {
            .flicking-pagination-bullet {
                background-color: #ffefe2;
                width: 12px;
                height: 8px;
                margin: 8px;
                border-radius: 3px;
            }
            .flicking-pagination-bullet-active {
                background-color: #F69C48;
                transform: scale(1.5);
            }
        }
    }

}
</style>
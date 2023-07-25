<template>
    <section id="top-news-section" class="w-full h-[500px] bg-[#fff4ec]">
        <div class="wrapper">
            <div class="pt-[10px] w-full text-thienquang-purple flex flex-col justify-center items-center">
                <div class="font-[500] text-[20px]">BẢNG TIN</div>
                <img class="w-[80px] h-[20px]" src="../../static/background/icon-divider.png" alt="">
            </div>
            <div>
                <iframe width="100%" height="315" frameborder="0" allowfullscreen
                :src="'//www.youtube.com/embed/'+ src">
                </iframe>
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
            src: 'fDCrGNDOzGY'
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
</style>
<template>
    <a :href="buttonLink" class="relative inline-block text-md md:text-lg group mb-[14px]">
        <span class="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-thienquang-dark-purple transition-colors duration-300 ease-out border-2 border-thienquang-dark-purple rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-thienquang-dark-purple group-hover:-rotate-180 ease"></span>
            <span class="relative">{{ buttonName }}</span>
        </span>
        <span class="absolute bottom-0 right-0 w-full h-11 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-thienquang-purple rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>
    </template>
    
    <script>
    export default {
        name: 'WhiteBlackButton',
        props: {
            buttonName: {
                type: String,
                required: true,
                default: ''
            },
            buttonLink: {
                type: String,
                required: false,
                default: '#'
            },
    
        },
        data() {
            return {}
        }
    }
    </script>
    
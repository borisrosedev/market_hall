<template>

    <section class="custom-carousel">
        <section class="custom-carousel__introduction-section">
            <h2>{{ data.title }}</h2>
            <p>{{ data.content }}</p>
        </section>
        <section class="custom-carouse__buttons-section">
            <button>
                <img src="/src/assets/icons/arrow_left_carousel.svg" alt="image of a left arrow" />
            </button>
            <button>
                <img src="/src/assets/icons/arrow_right_carousel.svg" alt="image of a right arrow" />
            </button>
        </section>
    </section>

</template>
<script setup lang="ts">

interface CustomCarouselIntroductionWithLeftRightButtonsProps {
    data: {
        title: string 
        content: string 

    }
}

defineProps<CustomCarouselIntroductionWithLeftRightButtonsProps>();

</script>

<style lang="scss" scoped>
.custom-carousel {
    display: flex;

    justify-content: space-between;

}
.custom-carousel__introduction-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        color: #ffffff;
    }
    p {
        color: #ffedb4;
        font-size: 12px;
    }
}
.custom-carouse__buttons-section {
    display: flex;
    button {
        border: solid #cab262 0.5px;
        margin-inline: 10px;
        background-color: #241b16;
        align-self: center;
        padding: 10px 15px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
}
</style>
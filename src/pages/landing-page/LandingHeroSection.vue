<template>

    <section class="landing__hero-section">
        <header class="landing__hero-header">
            <CustomTitleWithOptionalEmphasizedElement :data="titleComponentData" />
            <p>
                Connectons passionnés, collectionneurs et professionnels dans un
                écosystème sécurisé. Vendez facilement ou découvrez des pièces
                authentiques.
            </p>
        </header>
        <section class="landing__hero-value-propositions-section">
            <CustomIconShortMessageComponent v-for="(v, i) of valuePropositions" :key="i" :data="v" />
        </section>
        <section class="landing__hero-cta-section">
            <RouterLink to="/products"   class="no-underline">
                <CustomButtonWithOptionalIcon v-for="(cta, i) of heroCallToActions" :key="i" :data="cta" />
            </RouterLink>
        </section>
        <section class="landing__hero-carousel-and-best-products-sections">

            <section class="landing__hero-carousel-introduction-section">

                <CustomCarouselIntroductionWithLeftRightButtons :data="carouselIntroductionData" />
            </section>
            <section class="landing__hero-carousel-best-products-section">
                <CustomBestProductCard :data="customBestProductCardExample" />
            </section>

        </section>
    </section>


</template>
<script setup lang="ts">
import CustomTitleWithOptionalEmphasizedElement from "../../components/shared-components/CustomTitleWithOptionalEmphasizedElement.vue"
import CustomIconShortMessageComponent from "../../components/shared-components/CustomIconShortMessageComponent.vue"
import CustomButtonWithOptionalIcon from "../../components/shared-components/CustomButtonWithOptionalIcon.vue"
import CustomCarouselIntroductionWithLeftRightButtons from "../../components/shared-components/CustomCarouselIntroductionWithLeftRightButtons.vue"
import CustomBestProductCard from "../../components/card-components/CustomBestProductCard.vue"
const titleComponentData = {
    startTitle: "Votre marketplace",
    emphasizedElement: "<br /> d'antiquités",
    emphasisClassNames: "hero__emphasis-color",
    endTitle: "de confiance",
    classNames: "hero__title-color",
    hasEmphasis: true
}


const carouselIntroductionData = {
    title: 'Notre Sélection',
    content: 'Sélectionnées par nos experts pour leur authenticité et leur beauté'
}

const customBestProductCardExample = {
    tags: [
        {
            content: '18ème siècle'
        }
    ],
    title: 'Secrétaire Louis XVI en marqueterie',
    id: "1",
    likes: 25,
    views: 129,
    price_cents: 2850,
    seller: 'Maison Dubois Antiquités'
}

const valuePropositions = [
    {
        icon: 'auth',
        classNames: '',
        shortMessage: 'Authentification garantie',
        ariaLabel: 'Information on the security the app garantees'
    },

    {
        icon: 'seller',
        classNames: '',
        shortMessage: '+10 000 antiquaires',
        ariaLabel: 'Information on the quantity of sellers the app reaches'
    },
    {
        icon: 'payment',
        classNames: '',
        shortMessage: 'Paiement sécurisé',
        ariaLabel: 'Information on the security for paying the app garantie'
    },
]


const heroCallToActions = [
    {
        context: 'sell',
        content: 'Commencer à vendre',
        icon: 'arrow-left',
        classNames: 'hero__cta hero__cta--primary',
        ariaLabel: 'the button to start selling'
    },
    {
        context: 'exploration',
        content: 'Explorer les antiquités',
        classNames: 'hero__cta hero__cta--secondary',
        ariaLabel: 'the button to start exploring'
    }
]

</script>

<style lang="scss">
.landing__hero-carousel-and-best-products-sections {
    margin-block: 30px;
    width: 50%;
}

// .landing__hero-carousel-best-products-section {}

// .landing__hero-carousel-introduction-section {}

.landing__hero-value-propositions-section {
    display: flex;
    justify-content: space-between;
    width: 40%;
}

.landing__hero-cta-section {
    display: flex;
    margin-block: 20px;
    width: 40%;
    justify-content: space-between;

    button {
        margin-inline: 10px;
    }
}

.landing__hero-section {
    background-color: #1c1710;
    //min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;

    align-items: center;
}


.landing__hero-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.landing__hero-header h1 {
    font-size: 50px;
    text-align: center;

}

.landing__hero-header p {

    align-items: center;
    color: #ffedb4;
    font-family: "Inter", sans-serif;
    text-align: center;
    width: 60%;
}

.hero__title-color {
    font-family: "Inter", sans-serif;
    color: #FFFFFF;
    font-weight: 400;
}

.hero__emphasis-color {
    color: #D4AF37
}

.hero__cta {
    border-radius: 10px;
    padding-inline: 35px;
    padding-block: 5px;
    border: none;
    display: flex;
    align-items: center;
}

.hero__cta--primary {
    background-color: #D4AF37;
    color: #271f17;

    img {
        margin-inline-start: 5px;
    }
}

.hero__cta--secondary {
    background-color: #403327;
    color: #D4AF37;
    border: solid #D4AF37 1px;

}

.landing__hero-value-propositions-section {
    color: #ffedb4;
    margin-block: 10px;

    font-size: 12px;

    article {
        margin-inline: 5px;
        display: flex;
        align-items: center;

        span {
            margin-inline-start: 5px;
        }
    }
}


.no-underline {
  text-decoration: none;
  display: flex;
  color: inherit;
}


</style>
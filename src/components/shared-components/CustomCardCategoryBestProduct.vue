<template>

  <div class="container">
    
    <div class="category-button_yellow">
      <div class="tous"><span class="tous_span">Tous</span></div>
    </div>

   

    <section class="custom-best-product-card__category-section" v-if="category.tags"> 
      <TagBox v-for="(tag, i) in category.tags"
      :data="{ ...tag, classNames: 'category-button_transparent category-section category_span' }">
      </TagBox>  
    </section>


    
  </div>

</template>
<script setup lang="ts">
import TagBox from '../shared-components/TagBox.vue';

interface CustomCardCategoryBestProductProps {
  category: {
    title: string
    tags?: { content: string }[]
    className: string
  }
}

defineProps<CustomCardCategoryBestProductProps>();

</script>

<style lang="scss" scoped>

.custom-best-product-card__category-section{
 
 

   align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
.tous_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 12.58px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.tous {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.category_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 13.89px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.category-section {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
 


.category-button_yellow {
  height: 32px;
  padding-top: 5.50px;
  padding-bottom: 6.50px;
  padding-left: 12px;
  padding-right: 12px;
  background: var(--color-yellow-52, #D4AF37);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.category-button_transparent {
  height: 32px;
  padding-top: 5.50px;
  padding-bottom: 6.50px;
  padding-left: 13px;
  padding-right: 13px;
  background: var(--color-orange-9, #1A1612);
  border-radius: 10px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.container {
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
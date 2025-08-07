<template>
    <form @submit.prevent="onSubmit" :class="'d-flex ' + (classNames ?? '')" role="search">
        <input class="form-control me-2" type="search" :placeholder="placeholder ?? 'Search'" :aria-label="placeholder ?? 'Search'"/>
        <button :class="'btn ' + ((button && button.classNames) ?? 'btn-outline-success')" :type="(button && button.type) ?? 'submit'">{{ (button && button.content) ?? 'Search' }}</button>
    </form>
</template>
<script setup lang="ts">
import type { CustomFormHandlersType } from "../../interfaces/shared-interfaces/CustomFormInterface";
import type { CustomSearchEngineInterface } from "../../interfaces/shared-interfaces/CustomSearchEngineInterface"

defineProps<CustomSearchEngineInterface & CustomFormHandlersType>()

</script>
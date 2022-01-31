<template>
  <img v-if="url !== ''" v-bind:src="url" alt="" srcset="" />
</template>
<script>
export default {
  name: "nameDisplayGiftCat",
  props: {
    url: "",
  },
};
</script>

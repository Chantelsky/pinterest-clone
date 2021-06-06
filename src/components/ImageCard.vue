<template>
  <div>
    {{ query }}
  </div>
</template>

<script>
// TODO: work on this.
export default {
  props: {
    query: {
      type: String,
    },
  },
  data() {
    return {
      queryList: [],
    };
  },
  watch: {
    query() {
      this.queryList.push(this.query);
    },
  },
};
</script>

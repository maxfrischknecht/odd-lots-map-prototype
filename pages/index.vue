<template>
  <b-container fluid>
    <b-row>
      <b-col>
        Still tryin' to raise the charts so I don't have to push a shopping cart
        (Denzel Curry)
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Index',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'Index Description',
          content: 'custom description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

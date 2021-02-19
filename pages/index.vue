<template>
  <div>
    <Map />
  </div>
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

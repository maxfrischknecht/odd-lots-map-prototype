<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        Imprint
      </b-col>
      <b-col sm="12">
        <p>Design & Development</p>
        <p>
          <a
            href="https://debutdebut.com"
            target="_blank"
          >Début Début, Basel</a>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Imprint',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'Imprint Description',
          content: 'DébutDébut'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

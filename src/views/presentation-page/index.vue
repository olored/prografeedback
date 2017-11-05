<template>
  <div class="ppt-container">
    <div class="ppt-container-content">
      <div style="height: 80vh; border: 1px solid #ddd; position: relative;" class="w-100">
        <vue-draggable-resizable :w="width" :h="height" v-on:resizestop="onResizeStop" v-on:dragging="onDrag"
                                 v-on:resizing="onResize" :parent="true">
          <div>
            <!--<input type="number" v-model.number="page"> /{{numPages}}-->
            <pdf src="/static/ppt.pdf" :page="page" @numPages="numPages = $event"
                 style="width:100%"></pdf>
          </div>
        </vue-draggable-resizable>
      </div>
    </div>
  </div>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'
  import pdf from 'vue-pdf'

  export default {
    data: function () {
      return {
        width: 600,
        height: 190,
        x: 0,
        y: 0,
        page: 1,
        numPages: 0
      }
    },
    methods: {
      onResizeStop: function () {
        let current = this.page
        this.page = 0
        this.$nextTick(function () {
          this.page = current
        })
      },
      onResize: function (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
      },
      onDrag: function (x, y) {
        this.x = x
        this.y = y
      }
    },
    components: {
      VueDraggableResizable,
      pdf
    }
  }
</script>
<style scoped>
  .idb-block-content {
    padding: 0;
  }

  .ppt-container {
    background: white;
  }
</style>

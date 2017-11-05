<template>
  <div id="dashboard">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-8 d-lg-helf-block d-md-full">
        <div class="idb-block">
          <!--<div class="idb-block-title">-->
            <!--<div class="d-flex justify-content-between">-->
              <!--<div class="d-flex align-self-center">-->
                <!--<h2>New Article</h2>-->
              <!--</div>-->
              <!--<div class="d-flex align-self-center idb-contextual-link">-->
                <!--<b-dropdown variant="link" class="no-caret-icon">-->
                  <!--<template slot="button-content">-->
                    <!--<i class="ti-more-alt"></i>-->
                  <!--</template>-->
                  <!--<b-dropdown-item href="#"><i class="ti-eye"></i> View</b-dropdown-item>-->
                  <!--<b-dropdown-item href="#"><i class="ti-pencil"></i> Edit</b-dropdown-item>-->
                  <!--<b-dropdown-item href="#"><i class="ti-trash"></i> Delete</b-dropdown-item>-->
                <!--</b-dropdown>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div class="idb-full-block">
            <div class="table-responsive">
              <table class="table table-middle">
                <tbody>
                <item :info="room" v-for="room in rooms"></item>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import item from './item.vue'

  export default {
    name: 'presentation-list',
    components: {
      item
    },
    data: function () {
      return {
        rooms: []
      }
    },
    mounted: async function () {
      var k = await fetch('/api/room')
      let j = await k.json()
      this.rooms = j
    }
  }
</script>

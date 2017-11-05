<template>
  <tr>
    <td>
      <h2>{{info.ppt}}</h2>
      <p class="fs-14 artical-author">{{info.owner.nickname}}</p>
      <button class="btn btn-danger fs-14">Enter</button>
    </td>
    <td class="text-right">
      <img class="rounded" src="/static/img/post-1.jpg" width="100%" alt="post" />
    </td>
  </tr>
</template>
<script>
  export default {
    name: 'presentation-list-item',
    components: {

    },
    props: ['info'],
    data: function () {
      return {
      }
    }
  }
</script>

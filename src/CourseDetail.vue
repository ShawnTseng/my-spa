<template>
  <div>
    <h1>Course Detail</h1>
    <router-link to="/courses">Back</router-link>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {};
</script>
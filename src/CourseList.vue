

<template>
  <div>
    <h1>CourseList</h1>
    <div v-for="(course, index) in courses" :key="index">
      <router-link :to="`/courses/${course.id}`">
        <img :src="course.image" />
        {{course.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
import logo from './assets/logo.png';

export default {
  data() {
    return {
      courses: [
        { id: 1, image: logo, name: "Basic Course" },
        { id: 2, image: logo, name: "Advanced Course" },
        { id: 3, image: logo, name: "Extreme Course" }
      ]
    };
  }
};
</script>
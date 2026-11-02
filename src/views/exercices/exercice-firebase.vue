<template>
  <div>
    <h1 class="mt-6 text-center text-2xl font-bold">
      Articles Manager (Firebase Realtime Database)
    </h1>
    <FirebaseAddArticle />
    <FirebaseListArticles />
  </div>
</template>

<script setup>
import FirebaseAddArticle from "../../components/FirebaseAddArticle.vue";
import FirebaseListArticles from "../../components/FirebaseListArticles.vue";
</script>

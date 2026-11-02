<template>
  <div class="mx-auto max-w-xl p-4 md:p-8">
    <h2 class="mb-6 text-center text-3xl font-extrabold text-primary">
      Liste des articles
    </h2>

    <div v-if="loading" class="py-12 text-center">
      <span class="loading loading-spinner loading-lg text-primary"></span>
      <p class="mt-4 text-lg">Chargement des articles...</p>
    </div>

    <div v-else-if="articles.length === 0" class="py-12 text-center">
      <div class="alert alert-warning mx-auto max-w-md shadow-lg">
        <span>Aucun article disponible pour le moment.</span>
      </div>
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="article in articles"
        :key="article.id"
        class="card border border-base-300 bg-base-200 shadow-xl"
      >
        <div class="card-body">
          <h3 class="card-title text-2xl text-secondary">
            {{ article.title }}
          </h3>
          <p class="whitespace-pre-line opacity-90">{{ article.content }}</p>
          <small class="block text-xs opacity-70">
            Publié le : {{ formatDate(article.timestamp) }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ArticleDataService from "../services/ArticleDataService";

const articles = ref([]);
const loading = ref(true);

// Lit les articles dans Firebase
const loadArticles = () => {
  ArticleDataService.getAll((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      // Firebase renvoie un objet { id: article } : on le transforme en tableau
      articles.value = Object.keys(data).map((id) => ({ id, ...data[id] }));
    } else {
      articles.value = [];
    }
    loading.value = false;
  });
};

// Affiche la date en français
const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

// Charge les articles quand le composant apparaît
onMounted(loadArticles);
</script>

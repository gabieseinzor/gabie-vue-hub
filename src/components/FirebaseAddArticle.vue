<template>
  <div class="mx-auto max-w-xl p-4 md:p-8">
    <h1 class="mb-6 text-center text-3xl font-bold text-primary">
      Ajouter un nouvel article
    </h1>

    <div class="card border border-base-200 bg-base-100 shadow-xl">
      <div class="card-body">
        <form @submit.prevent="addArticle" class="space-y-4">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Titre de l'article</legend>
            <input
              v-model="title"
              type="text"
              class="input w-full"
              placeholder="Ex: Les bases de Vue 3"
              required
            />
          </fieldset>

          <fieldset class="fieldset">
            <legend class="fieldset-legend">Contenu de l'article</legend>
            <textarea
              v-model="content"
              class="textarea h-32 w-full"
              placeholder="Rédigez le contenu ici..."
              required
            ></textarea>
          </fieldset>

          <div class="card-actions justify-end pt-4">
            <button type="submit" class="btn btn-primary w-full md:w-auto">
              Ajouter l'article
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ArticleDataService from "../services/ArticleDataService";

// Champs du formulaire
const title = ref("");
const content = ref("");

// Ajoute un article dans Firebase
const addArticle = async () => {
  try {
    const article = {
      title: title.value,
      content: content.value,
      timestamp: Date.now(),
    };

    await ArticleDataService.create(article);

    alert("Article ajouté avec succès !");
    title.value = "";
    content.value = "";
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'article :", error);
    alert("Une erreur est survenue. Veuillez réessayer.");
  }
};
</script>

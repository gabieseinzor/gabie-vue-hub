// src/services/ArticleDataService.js
import { db as database } from "../firebase";
import { ref, push, update, remove, onValue } from "firebase/database";

class ArticleDataService {
  constructor() {
    // Référence vers le nœud "articles" de la base
    this.dbRef = ref(database, "articles");
  }

  // Lit tous les articles (et se remet à jour à chaque changement)
  getAll(callback) {
    onValue(this.dbRef, callback);
  }

  // Ajoute un article (Firebase génère l'id tout seul)
  create(article) {
    return push(this.dbRef, article);
  }

  // Modifie un article
  update(id, article) {
    return update(ref(database, `articles/${id}`), article);
  }

  // Supprime un article
  delete(id) {
    return remove(ref(database, `articles/${id}`));
  }

  // Supprime tous les articles
  deleteAll() {
    return remove(this.dbRef);
  }
}

// Une seule instance, partagée par tous les composants
export default new ArticleDataService();

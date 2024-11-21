## **Présentation du Test Siview Frontend**
Ce projet représente la partie frontend de l'application, utilisant Vue 3. Il interagit avec le backend pour gérer les données et les opérations.

---

### **Prérequis**
- Docker et Docker Compose doivent être installés sur votre machine.
- Le conteneur backend doit être démarré et fonctionnel.

---

### **Étapes pour Lancer le Frontend**

1. **Cloner le Dépôt**
   ```bash
   git clone https://github.com/flo-ipssi/siview_front
   cd siview_front

2. **Démarrer le Service Frontend** Lancez le conteneur avec Docker Compose :
   ```bash
   docker-compose up -d


3. **Accéder à l'Application**
   ```bash
   http://localhost:8080


### **Informations supplémentaires**

1. **Accéder au shell du conteneur**
   ```bash
   docker exec -it front bash

2. **À l'intérieur du conteneur :**

**Installer les dépendances si ce n’est pas encore fait**
   ```bash
   npm install


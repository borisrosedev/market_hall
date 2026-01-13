# Utilise une image Node.js LTS (20.x)
FROM node:20

# Définit le répertoire de travail
WORKDIR /src

# Copie les fichiers de configuration et d'installation
COPY package*.json ./ 
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force

# Installe les dépendances (avec cache optimisé)
RUN npm config set strict-ssl false
RUN npm config set registry https://registry.npmjs.org/
RUN npm install -g nodemon
RUN npm install

# Installation spécifique pour corriger le problème Rollup
# RUN npm install --include=optional
# RUN npm install @rollup/rollup-linux-x64-gnu --save-optional
RUN npm install @rollup/rollup-linux-x64-gnu --save-optional || true

# Copie le reste de l'application
COPY . . 


# Exposer le port Vite
EXPOSE 5173

# Configurer Vite pour Docker
ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=5173

 

# Commande par défaut (remplacée par docker-compose.yml)
#CMD ["nodemon", "--watch", "src/pages", "--watch", "src/utils", "--exec", "npx vite"]
#CMD ["nodemon", "--watch", "src/pages", "--watch", "src/utils", "--exec", "npm run dev"]
CMD ["npm", "run", "dev"]
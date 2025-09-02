ARG NODE_VERSION="22.18.0"
ARG ALPINE_VERSION="3.21"

# Docker basis
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base
WORKDIR /src

FROM base AS build
# Configuration file 
COPY package*.json ./

# Install
RUN npm install 
 
# Configuration files
COPY tsconfig.json ./
COPY vite.config.* ./
COPY index.html ./

# Source copy
COPY src/ ./src/
COPY public/ ./public/ 
COPY . .
  
EXPOSE 5173 

CMD ["npm", "run", "dev"]
 

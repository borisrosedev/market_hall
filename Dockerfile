ARG NODE_VERSION="22.18.0"
ARG ALPINE_VERSION="3.21"

# Docker basis
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base
WORKDIR /src

FROM base AS build
# Configuration file 
COPY . .
#COPY package*.json ./
#COPY tsconfig.json ./
#COPY vite.config.* ./

# Directory 
#COPY src/ ./src/
#COPY public/ ./public/

# Other file 
#COPY index.html ./


RUN npm ci
RUN npm run build

FROM base AS production
RUN npm install -g serve
COPY --from=build /src/dist/ ./dist/

# 3000
EXPOSE 5173 

# "3000"
CMD ["serve", "-s", "dist", "-l", "5173"]
 

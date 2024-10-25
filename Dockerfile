# Frontend/Dockerfile
FROM node:14

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

# Expose the port your React app runs on
EXPOSE 3000

CMD ["npm", "start"]

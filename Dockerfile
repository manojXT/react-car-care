# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV=development

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./react-car-care/package*.json /app/

RUN npm install

# Copying all the files in our project
COPY ./react-car-care /app/

# Starting our application
CMD ["npm", "start"]

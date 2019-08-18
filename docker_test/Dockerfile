FROM node:alpine
# ADD: TO MAKE SPACE FOR PACKAGE.JSON
ADD . /app
WORKDIR /app
RUN npm install
CMD ["npm", "run", "serve"]
# build environment
FROM 12.10.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
COPY . /app
CMD [ "nodemon", "index.js" ]
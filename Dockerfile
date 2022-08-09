FROM node:16 as build

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json server.js ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

FROM node:16-alpine

# Bundle app source
COPY --from=build /app /
EXPOSE 3000
CMD ["npm", "start"]
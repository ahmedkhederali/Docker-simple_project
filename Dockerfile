FROM node:15
WORKDIR /app
COPY package.json . 
# argument should be send from ather files 
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        # --only=production this flag used to prevent devdependancied to setup in production such as nodemon 
        else npm install --only=production; \
        #end file
        fi
COPY . ./
ENV PORT 3000
EXPOSE $PORT
#CMD ["npm","run","dev"]
CMD [ "node","index.js" ]
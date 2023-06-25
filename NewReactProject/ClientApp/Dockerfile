# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "D:/SiteManagement/NewReactProject/NewReactProject/ClientApp/srcindex.js"]
EXPOSE 3000
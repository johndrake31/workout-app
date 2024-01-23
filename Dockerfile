# Use an official Node runtime as a base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci --production

# Bundle app source
COPY . .

# Build the React app
RUN npm run build

# Expose the port that your app will run on (default is 3000)
EXPOSE 3000

# Command to serve the production build
CMD ["npm", "run", "start:prod"]

# Use an official Node runtime as a base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY . .

# Build the React app
RUN npm run build --verbose

# Expose the port that your app will run on (default is 3000)
EXPOSE 3000

# Command to serve the production build
CMD ["npm", "run", "start:prod"]


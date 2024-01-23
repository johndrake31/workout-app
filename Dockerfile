FROM node:16-alpine

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Set the working directory in the container
WORKDIR /app

# Bundle app source
COPY . .

# Build the React app
RUN npm run build --verbose

# Command to serve the production build
CMD ["npm", "run", "start:prod"]

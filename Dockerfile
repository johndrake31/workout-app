FROM node:16-alpine

WORKDIR /app
# Install app dependencies
COPY package*.json ./
RUN npm ci

# Set the working directory in the container

# Bundle app source
COPY . .

# Build the React app
RUN npm run build --verbose

# Command to serve the production build
CMD ["npm", "run", "start:prod"]

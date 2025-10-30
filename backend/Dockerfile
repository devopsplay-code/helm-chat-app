# ---------------------------
# Backend Dockerfile
# ---------------------------

# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all remaining files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the Node.js app
CMD ["npm", "start"]

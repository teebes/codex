# Build stage
FROM node:14 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm install

# Install missing Babel plugin
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

# Copy source code
COPY . .

# Build the application
ARG WR_BLOG_GA
ENV WR_BLOG_GA=${WR_BLOG_GA}
RUN npm run generate

# Production stage
FROM nginx:alpine

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
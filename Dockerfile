# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=22.14.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Use production node environment by default.
ENV NODE_ENV production
ENV PORT 5555

# Run the application as a non-root user.
USER node

# Copy package.json so that package manager commands can be used.
COPY node_modules node_modules
COPY dist dist

# Expose the port that the application listens on.
EXPOSE 5555
ADD ./roms /usr/src/app/roms
# Run the application.
CMD node dist/apps/DSGameCloudAPI/main.js









# FROM node:18 AS deps
# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN  npm install --omit=dev

# FROM node:18 AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# ENV NEXT_TELEMETRY_DISABLED 1

# RUN npm run build --debug

# FROM node:18 AS runner
# WORKDIR /app

# ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

# CMD ["npm", "start"]
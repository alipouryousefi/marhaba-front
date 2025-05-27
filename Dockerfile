FROM node:22-alpine AS base

RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Tehran /etc/localtime && \
    echo "Asia/Tehran" > /etc/timezone

WORKDIR /app

FROM base AS deps
RUN apk add --no-cache libc6-compat 
COPY package*.json ./
RUN npm ci --ignore-scripts

FROM base AS builder
WORKDIR /build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && npm ci --only=production --ignore-scripts

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN mkdir .next && chown appuser:appgroup .next

COPY --from=builder --chown=appuser:appgroup /build/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /build/.next/static ./.next/static
COPY --from=builder --chown=appuser:appgroup /build/public ./public
COPY --from=builder --chown=appuser:appgroup /build/package.json ./package.json

USER appuser

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
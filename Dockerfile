FROM node:16-alpine as builder

WORKDIR /app

# Install libc6 compat
RUN apk add --no-cache libc6-compat

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Fetch dependencies
COPY pnpm-lock.yaml .
RUN pnpm fetch

# Build
COPY . .
RUN pnpm install --offline && pnpm run build

FROM denoland/deno:alpine

WORKDIR /app
USER deno
COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 8085

CMD [ "run", "--allow-net", "--allow-read", "--allow-env", "./apps/homepage/dist/server/entry.mjs" ]

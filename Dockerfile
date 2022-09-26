FROM node:lts as builder

WORKDIR /app

COPY . .

RUN yarn install \
    --prefer-offline \
    --frozen-lockfile \
    --non-interactive \
    --production=false

RUN yarn build

RUN rm -rf node_modules && \
    NODE_ENV=production yarn install \
    --prefer-offline \
    --pure-lockfile \
    --non-interactive \
    --production=true

FROM denoland/deno:alpine

WORKDIR /app
USER deno
COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 8085

CMD [ "run", "--allow-net", "--allow-read", "--allow-env", "./dist/server/entry.mjs" ]

FROM oven/bun:alpine AS base
WORKDIR /base

RUN apk --no-cache add git
RUN git clone https://github.com/dominusmmp/next-starter ./
RUN bun install --frozen-lockfile

FROM base AS builder
WORKDIR /base

RUN bun run build

FROM oven/bun:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /base/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /base/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /base/.next/static ./.next/static

USER nextjs

# Expose the port the app runs on (default is 3000. Use 7860 for Hugging Face.)
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["bun", "server.js"]

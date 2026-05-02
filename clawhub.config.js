// Clawhub Verified Agent Identity Configuration
// Setup untuk npx clawhub@latest install verified-agent-identity

module.exports = {
  // ==========================================
  // AGENT CONFIGURATION
  // ==========================================
  agent: {
    id: process.env.CLAWHUB_AGENT_ID || "agent-verified-identity-001",
    name: "Billions Verified Agent",
    type: "verified-identity",
    version: "1.0.0",
    apiKey: process.env.CLAWHUB_API_KEY || "sk-verified-agent-billions-2026",
    secret: process.env.CLAWHUB_SECRET || "secret-billions-verified-identity",
    description: "AI Agent dengan Verified Identity untuk Billions Project"
  },

  // ==========================================
  // AUTHENTICATION CONFIGURATION
  // ==========================================
  auth: {
    provider: "verified-identity",
    method: "JWT",
    algorithm: "HS256",
    token: process.env.CLAWHUB_TOKEN || "jwt-verified-agent-token-billions",
    refreshToken: process.env.CLAWHUB_REFRESH_TOKEN || "refresh-token-billions-verified",
    tokenExpiry: "24h",
    refreshTokenExpiry: "7d",
    endpoint: process.env.CLAWHUB_ENDPOINT || "https://api.clawhub.io"
  },

  // ==========================================
  // IDENTITY VERIFICATION SETTINGS
  // ==========================================
  identity: {
    enabled: true,
    verificationMethod: "signature",
    tier: "verified",
    organization: "Billions",
    permissions: [
      "read:agent",
      "write:agent",
      "execute:tasks",
      "manage:identity",
      "access:webhooks"
    ],
    metadata: {
      region: "global",
      deployedAt: new Date().toISOString(),
      tags: ["ai-agent", "verified", "production-ready"]
    }
  },

  // ==========================================
  // SETTINGS
  // ==========================================
  settings: {
    environment: process.env.NODE_ENV || "development",
    debug: process.env.DEBUG === "true" || false,
    timeout: 30000,
    maxRetries: 3,
    retryDelay: 1000,
    logging: {
      level: "info",
      format: "json",
      file: "./logs/clawhub.log",
      maxSize: "10m",
      maxFiles: 5
    },
    performance: {
      enableCache: true,
      cacheTTL: 3600,
      enableMetrics: true,
      metricsInterval: 60000
    }
  },

  // ==========================================
  // DATABASE CONFIGURATION (Optional)
  // ==========================================
  database: {
    enabled: false,
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/clawhub-billions",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10
  },

  // ==========================================
  // WEBHOOK CONFIGURATION
  // ==========================================
  webhooks: {
    enabled: false,
    url: process.env.WEBHOOK_URL || "https://webhooks.billions.dev/clawhub",
    events: [
      "agent.started",
      "agent.stopped",
      "agent.error",
      "task.completed",
      "identity.verified"
    ],
    timeout: 5000,
    retryPolicy: {
      enabled: true,
      maxAttempts: 3,
      backoffMultiplier: 2
    }
  },

  // ==========================================
  // PORT & SERVER CONFIGURATION
  // ==========================================
  server: {
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
    ssl: {
      enabled: false,
      cert: "./certs/cert.pem",
      key: "./certs/key.pem"
    }
  },

  // ==========================================
  // FEATURE FLAGS
  // ==========================================
  features: {
    enableAIProcessing: true,
    enableIdentityVerification: true,
    enableWebhooks: false,
    enableDatabase: false,
    enableAutoScaling: false
  }
};

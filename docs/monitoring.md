# Monitoring & Maintenance

## Health checks
- /health endpoint returns basic service status.

## Error tracking
- Integrate Sentry or similar to capture runtime exceptions.

## Performance monitoring
- Use New Relic, Datadog, or Grafana (prometheus exporter) for server metrics.

## Uptime monitoring
- Use UptimeRobot or Pingdom to monitor /health.

## Log retention
- Use a centralized logging service (LogDNA, Papertrail, or ELK stack).

## Maintenance plan
- Security patch monthly, dependency audit weekly, DB backups daily (or per your SLA).

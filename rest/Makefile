dc_dev := docker-compose -f docker-compose.dev.yaml -p kp-seminarska-vaje
dc_prod := docker-compose -f docker-compose.prod.yaml -p kp-production

dev-yarn:
	cd api && yarn

# ------------------ Development only commads ------------------

# Start the local web docker environment 
dev-up:
	$(dc_dev) up --force-recreate --remove-orphans

dev-down:
	$(dc_dev) down -v

dev-prisma:
	$(dc_dev) exec kp-api sh

dev-build:
	$(dc_dev) build --no-cache

dev-build-caddy:
	$(dc_dev) build kp-caddy 

dev-build-ldap:
	$(dc_dev) build kp-openldap 

dev-logs:
	$(dc_dev) logs -f

dev-seed:
	$(dc_dev) exec kp-api yarn prisma db seed

# Clean everything related to local web docker environment and restart it 
dev-restart:
	$(dc_web_dev) down -v
	$(MAKE) web-up

# ------------------ Production commands ------------------

prod-up:
	$(dc_prod) up --force-recreate --remove-orphans

prod-down:
	$(dc_prod) down -v

prod-build:
	$(dc_prod) build

# Shells

prod-sh-api:
	$(dc_prod) exec prod-api-kp sh

prod-sh-caddy:
	$(dc_prod) exec reverse-proxy-kp sh

# Builds:

prod-build-api:
	$(dc_prod) build prod-api-kp 
	
prod-build-caddy:
	$(dc_prod) build reverse-proxy-kp 

# logs
prod-logs:
	$(dc_prod) logs -f

# Seed
prod-seed:
	$(dc_prod) exec prod-api-kp yarn prisma db seed
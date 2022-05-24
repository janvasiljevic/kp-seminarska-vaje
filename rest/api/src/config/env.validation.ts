import { plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, validateSync, IsString } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;

  @IsString()
  HTTP_API_PREFIX: string;

  @IsString()
  HTTP_SWAGGER_DOCS_PREFIX: string;

  @IsString()
  DATABASE_URL: string;
  @IsString()
  LDAP_URL: string;
  @IsString()
  LDAP_BIND_DN: string;

  @IsString()
  LDAP_BIND_CREDS: string;

  @IsString()
  COOKIE_SECRET: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

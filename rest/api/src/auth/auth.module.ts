import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LdapStrategy } from './ldap.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthSerializer } from './serialization.provider';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'ldap', session: true }),
  ],
  controllers: [AuthController],
  providers: [LdapStrategy, AuthSerializer],
})
export class AuthModule {}

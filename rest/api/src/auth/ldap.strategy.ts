import * as Strategy from 'passport-ldapauth';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { LdapReturnDto } from './entity/ldap.entity';
import { Config } from 'apollo-server-express';
import { ConfigService } from '@nestjs/config';

/*
-x = simple auth
-b = base search
-D = bind dn
-w = password

ldapsearch -x -H ldap://localhost -b dc=kpbookstore,dc=kp -D "cn=admin,dc=kpbookstore,dc=kp" -w test1234
ldapsearch -x -H ldap://localhost -b dc=kpbookstore,dc=kp -D "cn=admin,dc=kpbookstore,dc=kp" -w test1234 "mail=test@gmail.com"
*/

/**
 * Some useful documentation to follow:
 * - Github: https://github.com/vesse/passport-ldapauth#readme
 * - Passport: https://www.passportjs.org/packages/passport-ldapauth/
 */
@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, 'ldap') {
  private readonly logger = new Logger(LdapStrategy.name);

  constructor(private readonly configService: ConfigService) {
    super(
      {
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password',
        server: {
          url: configService.get<string>('LDAP_URL'),
          bindDN: configService.get<string>('LDAP_BIND_DN'),
          bindCredentials: configService.get<string>('LDAP_BIND_CREDS'), // Password for bindDN
          searchBase: 'dc=kpbookstore,dc=kp',
          searchFilter: '(mail={{username}})',
          searchAttributes: ['cn', 'displayName', 'mail', 'memberOf', 'sn'],
        },
        handleErrorsAsFailures: true, // When true, unknown errors and ldapjs emitted errors are handled as authentication failures instead of errors (default: false).
        failureErrorCallback: (err: any) => {
          this.logger.error('Something went wrong during LDAP authentication');
          this.logger.verbose('Error:', err);
        },
      },
      async (req: Request, user: LdapReturnDto, done) => {
        req.user = user;

        this.logger.verbose(
          `User ${user.mail} - ${user.displayName} ${user.sn} (${user.dn}) authenticated successfully`,
        );

        done(null, user);
      },
    );
  }
}

import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { ISessionUser, Role } from 'src/common/interfaces';

import { LdapReturnDto } from './entity/ldap.entity';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  private readonly logger = new Logger(AuthSerializer.name);

  serializeUser(
    user: LdapReturnDto,
    done: (err: Error, passportUser: ISessionUser) => void,
  ) {
    const extractedRole = user.memberOf.split(',')[0].split('=')[1];

    let role: Role | null = null;

    if (extractedRole === 'Admins') role = 'admin';
    else if (extractedRole === 'Clerks') role = 'clerk';
    else if (extractedRole === 'Sellers') role = 'seller';

    if (role === null) throw new UnauthorizedException('User has no role!');

    done(null, {
      firstname: user.displayName,
      lastname: user.sn,
      mail: user.mail,
      role,
      dn: user.dn,
    });
  }

  deserializeUser(
    payload: ISessionUser,
    done: (err: Error, passportUser: ISessionUser) => void,
  ) {
    done(null, payload);
  }
}

import {
  ExecutionContext,
  Injectable,
  Logger,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ISessionUser, Role } from '../interfaces';
import { LoggedInGuard } from './logged-in.guard';

@Injectable()
export class RoleGuard {
  private readonly loggerAdmin = new Logger(LoggedInGuard.name);

  constructor(private reflector: Reflector) {}

  // If there is no role specified authenticate a logged in user
  // If the user is admin always allow
  // Then check if the permissions are correct
  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.get<Role>('role', context.getHandler());

    const req = context.switchToHttp().getRequest();

    const user: ISessionUser | undefined = req.user;

    // console.log(user);

    if (!user) return false;

    if (!role) return true;

    if (user.role === 'admin') return true;

    return user.role === role;
  }
}

export const Roles = (role: Role) => SetMetadata('role', role);

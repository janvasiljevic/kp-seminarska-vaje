import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';

@Injectable()
export class LoggedInGuard implements CanActivate {
  private readonly logger = new Logger(LoggedInGuard.name);

  canActivate(context: ExecutionContext) {
    const isAuth = context.switchToHttp().getRequest().isAuthenticated();
    return isAuth;
  }
}

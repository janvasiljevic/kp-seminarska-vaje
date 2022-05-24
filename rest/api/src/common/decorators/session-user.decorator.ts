import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { ISessionUser } from '../interfaces';

export const SessionUser = createParamDecorator<ISessionUser>(
  (data: unknown, ctx: ExecutionContext): ISessionUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

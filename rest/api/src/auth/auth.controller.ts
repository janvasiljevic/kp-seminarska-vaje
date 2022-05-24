import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SessionUser } from 'src/common/decorators/session-user.decorator';
import { LdapGuard } from 'src/common/guards/ldap.guard';
import { LoggedInGuard } from 'src/common/guards/logged-in.guard';
import { ContentInterceptor } from 'src/common/interceptor/content.interceptor';
import { ISessionUser } from 'src/common/interfaces';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@UseInterceptors(new ContentInterceptor())
@ApiTags('Authentication')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  @Post('login')
  @ApiBody({ type: LoginDto })
  @UseGuards(LdapGuard)
  @ApiOkResponse({ description: 'Successfully logged in', type: ISessionUser })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @HttpCode(200)
  login(@Req() req): ISessionUser {
    return req.session.passport.user;
  }

  @Get('me')
  @UseGuards(LoggedInGuard)
  @ApiCookieAuth()
  me(@SessionUser() sessionUser: ISessionUser): ISessionUser {
    return sessionUser;
  }

  @Delete('logout')
  @UseGuards(LoggedInGuard)
  @ApiCookieAuth()
  loggout(@Req() req, @SessionUser() sessionUser: ISessionUser) {
    req.logout(() => {
      this.logger.log(
        `User ${sessionUser.firstname} ${sessionUser.lastname} logged out`,
      );
    });

    return 'Logged out';
  }
}

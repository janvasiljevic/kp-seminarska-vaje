import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request, Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = 500;
    let message = 'Unknown error';

    if (exception.code == 'P2025') {
      status = 404;
      message = 'Specified identifier does not exits';
    } else if (exception.code == 'P2002') {
      status = 409;
      message = 'Duplicate entry for unique field';
    } else if (exception.code == 'P2003') {
      status = 400;
      message = 'Bad request data';
    }

    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}

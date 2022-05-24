import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { parse } from 'json2csv';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { json2xml } from 'xml-js';
import { stringify as YAMLStringify } from 'yaml';

const json = 'application/json',
  csv = 'text/csv',
  xml = 'text/xml',
  yaml = 'text/yaml';

const contType = 'Content-Type';

@Injectable()
export class ContentInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();

    const content = req.header('Accept');

    return next.handle().pipe(
      switchMap((data) => {
        if (content === json) {
          res.setHeader(contType, json);
          return of(data);
        } else if (content === csv) {
          const td = parse(data);
          res.header(contType, csv);
          return of(td);
        } else if (content === yaml) {
          const td = YAMLStringify(data);
          res.header(contType, yaml);
          return of(td);
        } else if (content === xml) {
          const td = json2xml(JSON.stringify({ response: { data } }), {
            compact: true,
            spaces: 4,
          });
          res.header(contType, xml);
          return of(td);
        } else {
          return of(data);
        }
      }),
    );
  }
}

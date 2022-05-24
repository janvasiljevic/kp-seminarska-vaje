import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiProduces, getSchemaPath } from '@nestjs/swagger';
import { DecorateAll } from 'decorate-all';
import { ContentInterceptor } from '../interceptor/content.interceptor';

export const OpenApiPaginationResponse = (model: any) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        properties: {
          count: {
            type: 'number',
          },
          items: {
            type: 'array',
            items: { $ref: getSchemaPath(model) },
          },
        },
      },
    }),
  );
};

export const ContentNegotationAll = () =>
  DecorateAll(
    ApiProduces('application/json', 'text/csv', 'text/xml', 'text/yaml'),
  );

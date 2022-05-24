import { ApiProperty } from '@nestjs/swagger';

export class IPaginationResult<T> {
  @ApiProperty()
  items: T[];

  @ApiProperty()
  count: number;
}

export class ISessionUser {
  firstname: string;
  lastname: string;
  mail: string;
  dn: string;
  role: Role;
}

export type Role = 'clerk' | 'seller' | 'admin';

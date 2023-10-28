import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '13.124.173.108',
  port: 5432,
  username: 'smpsql',
  password: 'hanabi6637',
  database: 'test',
  entities: ['dist/**/*.entity.{ts,js}'],
  synchronize: true,
};

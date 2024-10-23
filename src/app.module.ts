import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [PrismaModule, ArticlesModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

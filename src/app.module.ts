import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ReportsModule } from './reports/reports.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // debug: false,
      // playground: false,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    ReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

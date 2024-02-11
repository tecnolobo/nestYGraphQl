import { join } from 'path';
import { Module } from '@nestjs/common';
import { ApolloDriverConfig,ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground:false, //Esto indica que se habilitara o no la pagina donde se hacen los querys, en caso de que no esta habilitado la pagina debera porcionarse por codigo la consulta.
      plugins:[
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    HelloWorldModule,
    TodoModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloController, UsersController],
  providers: [AppService],
})
export class AppModule { }

// import { Module } from '@nestjs/common';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

// @Module({
//   imports: [
//     ServeStaticModule.forRoot({
//       rootPath: join(__dirname, '..', 'public'),
//     }),
//   ],
// })
// export class AppModule { }
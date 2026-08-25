// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) { }

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHome() {
    return `
      <html>
        <body>
          <h1>Hello from NestJS</h1>
          <p>This is HTML rendered by NestJS.</p>
          <button onclick="alert('Clicked!')">
            Click Me
          </button>
        </body>
      </html>
    `;
  }
}
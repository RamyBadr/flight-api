"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const viveo_swagger_1 = require("./viveo-swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT');
    viveo_swagger_1.setupSwagger(app, configService.get('NODE_ENV'));
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.enableCors();
    await app.listen(port);
    common_1.Logger.log(`app started on port: ${port}`, 'Main');
}
bootstrap();
//# sourceMappingURL=main.js.map
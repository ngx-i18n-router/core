// angular
import { Routes } from '@angular/router';

// libs
import * as _ from 'lodash';
import { ConfigService } from '@ngx-config/core';
import { I18NRouterLoader, I18NRouterSettings } from '@ngx-i18n-router/core';

export class I18NRouterConfigLoader implements I18NRouterLoader {
  get routes(): Routes {
    return _.map(this.providedSettings.routes, _.cloneDeep);
  }

  get translations(): any {
    if (!this.config)
      throw new Error('No [config] specified!');

    if (!this.config.getSettings())
      return undefined;

    return this.config.getSettings(this.group);
  }

  constructor(private readonly config: ConfigService,
              private readonly group: string = 'routes',
              private readonly providedSettings: I18NRouterSettings = {}) {
  }

  loadTranslations(): any {
    return Promise.resolve(undefined);
  }
}

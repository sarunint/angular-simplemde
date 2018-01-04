import { InjectionToken } from '@angular/core';
import * as SimpleMDE from 'simplemde';

export const SIMPLEMDE_DEFAULT_OPTIONS = new InjectionToken<SimpleMDE.Options>('SimpleMDEDefaultOptions');
